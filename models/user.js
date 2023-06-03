/*
a Node.js package that provides a straight-forward, schema-based solution to model the application data with MongoDB.
*/
const mongoose = require("mongoose");
/*
UserSchema is defined as a new mongoose.Schema object. 
This schema maps to a MongoDB collection and defines the shape of the documents within that collection.
*/
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }, 
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

/*
The mongoose.model("User", UserSchema) function is used to create a new User model. 
This model is a class with which documents are constructed. 
In this case, each document will be a user with properties and behaviors (as declared in the schema).
*/
const User = mongoose.model("User", UserSchema);
/*
The User model is exported with module.exports = User;. 
This allows the User model to be imported and used in other files within the project. 
For example, it can be used in a route to create a new user, find a user, or update a user's information.
*/
module.exports = User;
