const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const cors = require('./cors');
var pass = require('../passport-config');
var db = require('../mysql-config');

const usersRouter = express.Router();

usersRouter.options('*', cors.corsWithOptions, (req, res) => { res.sendStatus(200); })

//user login
usersRouter.route('/login')
  .post(cors.corsWithOptions, (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
      if (err)
        return next(err);

      if (!user) {
        res.statusCode = 401;
        res.json({ success: false, status: 'Login Unsuccessful!', err: info });
      }
      else {
        req.logIn(user, { session: false }, (err) => {
          if (err) {
            res.statusCode = 401;
            res.json({ success: false, status: 'Login Unsuccessful!', err: 'Could not log in user!' });
          }
          var token = pass.getToken({ _id: req.user.username });
          res.statusCode = 200;
          res.json({ success: true, status: 'Login Successful!', token: token });
        });
      }
    })(req, res, next);
  });

//reset password
usersRouter.post('/resetPassword', pass.verifyUser, (req, res) => {
  let query = "SELECT password FROM users WHERE username='" + req.user.username + "'";
  db.query(query, async (err, result) => {
    let dbPassword = result[0].password;
    let curPassword = req.body.curPassword;
    if (await bcrypt.compare(curPassword, dbPassword)) {
      let hashedPassword = await bcrypt.hash(req.body.newPassword, 10);
      let query2 = "UPDATE users SET password='" + hashedPassword + "' WHERE username='" + req.user.username + "'";
      db.query(query2, (err, result) => {
        if (err)
          return err;
        else {
          res.json({ success: true });
        }
      });
    }
    else {
      res.statusCode = 422;
      res.json({ error: 'Invalid Password' });
    }
  })
});

//check JWT token validity
usersRouter.get('/checkJWTToken', cors.corsWithOptions, (req, res) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err)
      return next(err);
    if (!user) {
      res.statusCode = 401;
      return res.json({ status: 'JWT invalid', success: false, err: info })
    }
    else {
      res.statusCode = 200;
      return res.json({ status: 'JWT valid', success: true, user: user })
    }
  })(req, res);
})

module.exports = usersRouter;