const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Defining methods for the usersController
module.exports = {
  create: function(req, res) {
    console.log("USER", req.body);
    const { name, email, password, confirmPassword } = req.body;

    // start of validation
    let errors = [];
      // check required fields
      if (!name || !email || !password || !confirmPassword) {
        errors.push({ msg: "Please complete all of the fields." });
      }
      //   // check password match
      if (password !== confirmPassword) {
        errors.push({ msg: "Passwords do not match" });
      }
      //   // password length
      if (password.length < 6) {
        errors.push({ msg: "Password must be at least 6 characters long" });
      }
      if (errors.length > 0) {
        res.json({
          errors,
          name,
          email,
          password,
          password2
        });
      } else {
      // validation passed
      db.User.findOne({ email: email }).then(user => {
        if (user) {
          // User already exists
          errors.push({ msg: "Email address is already registered." });
          res.json({
            errors: errors,
            name: name,
            email: email,
            password: password
          });
        }
        //   // encrypt password bcrypt.hash
        bcrypt.hash(password, 10, function(err, hash) {
          const user = {
            name: name,
            email: email,
            password: hash
          };

          db.User.create(user)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        });
      });
    }
  },
  login: function(req, res) {
    const { email, password } = req.body;

    db.User.findOne({ email })
      .then(userFromStevesDB => {
        bcrypt.compare(password, userFromStevesDB.password, function(
          err,
          same
        ) {
          if (same) {
            const token = jwt.sign(
              {
                email: userFromStevesDB.email,
                id: userFromStevesDB._id
              },
              "super-secret"
            );
            return res.json({
              name: userFromStevesDB.name,
              id: userFromStevesDB.id,
              token
            });
          } else {
            return res.json(404).json({
              error: "Password does not match the Username"
            });
          }
        });
      })
      .catch(err => res.status(422).json("User Not Found"));
  }
};
