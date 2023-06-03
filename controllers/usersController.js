/*
The main connections of this file are to the models (for interacting with the database) and 
to the routes (where these functions are used as handlers). 
The bcrypt and jwt modules are used for security purposes: bcrypt for securely storing passwords and jwt for managing user authentication.
*/

/*
This line imports the Mongoose models. 
In the models directory, I should have a file that defines the User schema and model.	
The User model is used within this file (usersController.js) to interact with the Users collection in the MongoDB database.
Connected to the User model defined in the models directory.
*/
const db = require("../models");

/*
This line imports the bcryptjs module, a library to hash passwords. 
Hashing is important for security reasons; it helps protect passwords even if the database gets compromised.	
Bcrypt is used within this file to hash and compare passwords.
Imports the bcryptjs library to hash passwords. 
Password hashing provides security, protecting passwords even if the database gets compromised.
*/
const bcrypt = require("bcryptjs");

/*
This line imports the jsonwebtoken module, which helps in generating a JSON Web Token (JWT). 
JWTs are used for user authentication. 
Once a user is logged in, subsequent requests from the user can be authenticated by checking the JWT sent with the request.	
The JWT is used within the login function to generate a token that is then returned to the client for subsequent authenticated requests.
Imports the jsonwebtoken library for generating JSON Web Tokens (JWT). 
JWTs authenticate users by checking the token sent with each request post-login.
*/
const jwt = require("jsonwebtoken");

// Defining methods for the usersController
/*
This line starts the export of an object that contains two methods: create and login. 
These methods are used in my routes to handle HTTP requests.	
These methods are imported in routes/api/users.js and assigned as handlers for specific routes.

*/

const validator = require("validator"); // for robust validation

module.exports = {
  /*
  This function creates a new user. 
  It first validates the incoming request data, 
  then checks to see if the user already exists in the database. 
  If not, it hashes the user's password and stores the new user in the database.	
  This method is used as the handler for POST requests to '/register' in routes/api/users.js.
  */
  create: async function(req, res) {
    console.log("USER", req.body);
    const { name, email, password, confirmPassword } = req.body;

    // start of validation
    let errors = [];

    // verify that fields are not empty
    if (!name || !email || !password || !confirmPassword) {
      errors.push({ msg: "Please complete all of the fields." });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      errors.push({ msg: "Invalid email format." });
    }

    // verify that  password match
    if (password !== confirmPassword) {
      errors.push({ msg: "Passwords do not match" });
    }

    // password length
    if (password.length < 6) {
      errors.push({ msg: "Password must be at least 6 characters" });
    }

    // Send errors, if any
    if (errors.length > 0) {
      return res.status(400).json({
        errors,
        name,
        email
        // Removed password from the response for security
      });
    } else {
      try {
        const user = await db.User.findOne({ email: email });
        if (user) {
          errors.push({ msg: "Email is already registered." });
          return res.status(400).json({
            errors,
            name,
            email
            // Removed password from the response for security
          });
        } else {
          // Hash password and store the user
          const hash = await bcrypt.hash(password, 10);
          const newUser = {
            name: name,
            email: email,
            password: hash
          };

          const dbModel = await db.User.create(newUser);
          return res.json(dbModel);
        }
      } catch(err) {
        return res.status(422).json(err);
      }
    }
  },
  /*
  This function handles user login. 
  It first checks if a user with the given email exists in the database. 
  If the user exists, it checks if the given password matches the stored (hashed) password. 
  If the passwords match, it generates a JWT and sends it back in the response.	
  This method is used as the handler for POST requests to '/login' in routes/api/users.js.
  */
  login: async function(req, res) {
    const { email, password } = req.body;

    try {
      const userFromDB = await db.User.findOne({ email });

      if (!userFromDB) {
        return res.status(404).json({ error: "User not found." });
      }

      const same = await bcrypt.compare(password, userFromDB.password);

      if (same) {
        const token = jwt.sign(
          {
            email: userFromDB.email,
            id: userFromDB._id
          },
          "jwt-secret-key",
          { expiresIn: '1h' }  // JWT expiration
        );

        return res.json({
          name: userFromDB.name,
          id: userFromDB.id,
          token
        });
      } else {
        return res.status(404).json({
          error: "Password does not match the Username."
        });
      }
    } catch(err) {
      return res.status(500).json({ error: "Error fetching user." });
    }
  }
};

/*
The general connection of this file is to the models for interacting with the database and to the routes where these functions are used as handlers. 
The bcrypt and jwt modules are used for security purposes: bcrypt for securely storing passwords and jwt for managing user authentication.
*/

/*
NOTE: Remember to replace "super-secret" with a secret string in a secure environment variable, 
and never disclose it in your codebase. 
Also, remember to handle the errors that might occur during the bcrypt functions and when signing the jwt token.
*/
