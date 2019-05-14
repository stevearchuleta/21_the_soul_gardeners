const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

// per jeffery... modify mongoose model in user schema to create a "pre save event" -- callback -- in order to compare password method.

const userSchema = new Schema({
  userName: { type: String, required: true, index: true, unique: true},
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
