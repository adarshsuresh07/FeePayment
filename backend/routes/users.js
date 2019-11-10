const express = require('express');
const passport = require('passport');
const cors = require('./cors');
var pass = require('../passport-config');

const loginRouter = express.Router();

loginRouter.options('*',cors.corsWithOptions, (req,res) => {res.sendStatus(200); })

loginRouter.route('/login')
.post(cors.corsWithOptions,(req,res,next) => {
  passport.authenticate('local',{session: false}, (err, user, info) => {
    if (err)
      return next(err);

    if (!user) {
      res.statusCode = 401;
      res.json({success: false, status: 'Login Unsuccessful!', err: info});
    }
    req.logIn(user, {session: false}, (err) => {
      if (err) {
        res.statusCode = 401;
        res.json({success: false, status: 'Login Unsuccessful!', err: 'Could not log in user!'});          
      }
      var token = pass.getToken({_id: req.user.username});
      res.statusCode = 200;
      res.json({success: true, status: 'Login Successful!', token: token});
    }); 
  }) (req, res, next);
});

loginRouter.get('/checkJWTToken', cors.corsWithOptions, (req,res) => {
  passport.authenticate('jwt',{session: false},(err,user,info) => {
    if(err)
      return next(err);
    if(!user) {
      res.statusCode = 401;
      return res.json({status: 'JWT invalid',success: false, err: info})
    } 
    else {
      res.statusCode = 200;
      return res.json({status: 'JWT valid',success: true, user: user})
    } 
  }) (req, res);
})
module.exports = loginRouter;