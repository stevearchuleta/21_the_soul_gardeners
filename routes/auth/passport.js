// brings passport middleware into the program
const passport = require ('passport');
const LocalStrategy = require ("passport-local").Strategy;
const User = require('../../models/user')

// config passport to use LocalStrategy
passport.use(
  new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
  }, () => null),
  (userName, password, done) => {
    // find the user by it's userName
    User.findOne({userName}).exec()
      .then((user) => {
        if(user && user !== null) {
          // user is found so check if the passwords match (hashing bcrypt)
          if(password === user.password) {
            // they match return (through the done callback) the user object
            done(null, user);
          } else {
            done(null, false, {msg: 'Incorrect password'})
          }
        } else {
          done(null, false, {msg: 'User not found!'});
        }
      });
  }
);
