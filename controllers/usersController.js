const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Defining methods for the usersController
module.exports = {
  
  login: function(req, res) {
    const { username, password } = req.body;
    db.User
      .findOne({ username })
      .then(userFromStevesDB => {
        bcrypt.compare(password, userFromStevesDB.password, function(err, same){
          if (same) {
            const token = jwt.sign({
              username: userFromStevesDB.username,
              id: userFromStevesDB._id
            }, "super_secret")
            return res.JSON({
              username: userFromStevesDB.username,
              id: userFromStevesDB.id,
              token
            })
          } else {
            return res.json(404).json({
              error: "Password does not match the Username"
            })
          }
        })
      })
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    const { username, password } = req.body;
    bcrypt.hash(password, 10, function(err, hash) {
      const user = {
        username,
        password: hash
      }
  
      db.User
        .create(user)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    });
  }
};