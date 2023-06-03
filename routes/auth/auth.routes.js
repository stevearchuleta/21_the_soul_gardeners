/*
The auth.routes.js file is responsible for defining the route that handles 
the POST request to '/local' for user authentication using the local strategy, 
which authenticates users based on a username and password stored in your database.

Here's how it works:

It first requires express's router to define a route and the configured passport from passport.js.
It sets up a route for POST requests to '/local'.
It then defines a middleware function that is executed when the POST request is made to '/local'.
Within the middleware function, it calls passport.authenticate('local'), 
which is a function that handles user authentication using the local strategy as defined in passport.js.
The authenticate method takes a callback function that gets executed once authentication is done.
*/

const router = require ("express").Router();
const passport = require ("./passport");
const jwt = require('jsonwebtoken'); // Require jsonwebtoken for creating a token

router
  .route('/local')
    .post((req, res, next) => {
        console.log('auth-routes: local started');
        const authFnc = passport.authenticate('local', (err, user, info) => {
            console.log('passport.authenticate(...) local: ', {err, user, info});
            if(err) {
              console.log('passport.authenticate(...) local: error path');
              // Respond with a 500 status code and error message
              res.status(500).json({ message: "An error occurred during authentication." });
            } else if (user) {
              console.log('passport.authenticate(...) local: success path', user);

              // Create a token for the user
              const token = jwt.sign(user.toJSON(), 'your_jwt_secret', { expiresIn: '1h' });

              // Set the token in the response header
              res.setHeader('Authorization', 'Bearer ' + token);

              // Redirect back to the client
              res.status(200).json({ message: "User authenticated successfully.", user });
            } else {
              console.log('passport.authenticate(...) local: user not found');
              // Respond with a 401 status code and error message
              res.status(401).json({ message: "User not found." });
            }
        });
        authFnc(req, res, next);
    });

module.exports = router;
