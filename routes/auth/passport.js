// Require the passport package for handling user authentication
const passport = require('passport');

// Require the LocalStrategy from the passport-local package.
const LocalStrategy = require("passport-local").Strategy;

// Import the user model schema to interact with the database
const User = require('../../models/user');

// Import the bcrypt functions from bcrypts.js
const { checkPassword } = require('./bcrypts.js');

// Define the passport authentication strategy
passport.use(
  new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
  }, 
  (username, password, done) => {
    // Search the User model for a user with the username passed in
    User.findOne({ username: username })
      .then((user) => {
        if (!user) {
          return done(null, false, { message: 'User not found!' });
        }

        // Use the checkPassword function from bcrypts.js to compare the entered password to the hashed password
        checkPassword(password, user.password)
          .then((isMatch) => {
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: 'Incorrect password' });
            }
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  })
);

// Export the configured passport middleware
module.exports = passport;
