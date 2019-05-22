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
    console.log('passport.js: localStrategy(...) called: ', 
      {userName, password});
    // find the user by her userName
    User.findOne({userName}).exec()
      .then((user) => {
        console.log('passport.js: localStrategy: User.findOne: returned ', 
          {user});
        if(user && user !== null) {
          // user is found so check if the passwords match (hashing bcrypt)
          console.log(`passport.js: localStrategy: user found for username ${userName} checking passwords`);
          if(password === user.password) {
            // they match return (through the done callback) the user object
            cconsole.log('passport.js: localStrategy: passwords match for', {userName});
            done(null, user);
          } else {
            console.log('passport.js: localStrategy: incorrect password for',{userName});
            done(null, false, {msg: 'Incorrect password'})
          }
        } else {
          console.log(`passport.js: localStrategy: user not found ${userName}`);
          done(null, false, {msg: 'User not found!'});

        }
      })
      .catch(err => {
        console.log('passport.js: localStrategy: User.findOne: error ', 
          {err});
      });
  }
);

module.exports = passport;