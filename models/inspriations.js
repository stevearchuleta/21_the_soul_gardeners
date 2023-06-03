// The inspiration.js file is defining the structure (or "schema") of the 'InspirationSeed' collection in the MongoDB database.
// This schema is then used in seedDB.js to create new 'InspirationSeed' documents and seed them into the database.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inspirationSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: "SGA",
  },
  image: {
    type: String,
  },
});

const Inspiration = mongoose.model("InspirationSeed", inspirationSchema);

module.exports = Inspiration;
