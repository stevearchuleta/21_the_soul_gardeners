// brings passport middleware into the program
const passport = require ('passport');
const LocalStrategy = require ("passport-local").Strategy;

// config passport to use LocalStrategy
passport.use(
  new LocalStrategy({
    
  }),
  (userName, password, done) => {
    // find the user by it's userName
    {
      // user is found so check if the passwords match (hashing bcrypt)

      // if they match return (through the done callback) the user object
    }
  }
);
