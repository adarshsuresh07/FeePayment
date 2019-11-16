const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const passport = require('passport');
const db = require('./mysql-config');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');

exports.local = passport.use('local', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, (req, username, password, done) => {
  const query = 'SELECT * FROM users WHERE username=?';
  db.query(query,[username],(err,rows) => {
    if(err) return done({message: err});
    if(!rows.length || req.body.role!=rows[0].role) {
      return done(null,false,
        {message: 'invalid Username or Password'});
    }

    let dbPassword = rows[0].password;
    if(dbPassword !== password) {
      return done(null,false,
        {message: 'invalid Username or Password'});
    }
    return done(null, rows[0]);
  });
}));

exports.getToken = (user) => {
  return jwt.sign(user, 'secretapparently', {expiresIn: 3600});
};

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secretapparently';
opts.passReqToCallback = true;

exports.jwtPassport = passport.use(new JwtStrategy(opts, 
  (req, jwt_payload, done) => {
    db.query("SELECT * FROM users WHERE username = '"+jwt_payload._id+"'", (err, rows) => {
      if(err)
         return done(err, false);
      else if(rows.length>0)  
        return done(null, rows[0]);
      else 
        return done(null, false);  
    });
}));

exports.verifyUser = passport.authenticate('jwt',{session: false});