const mongoose = require("mongoose");

const HarvestHelperSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  plants: [
    {
      common_name: String,
      scientific_name: String,
      id: Number,
      image_url: String,
      // Add any other plant properties that you want to store
    },
  ],
});

module.exports = mongoose.model("HarvestHelper", HarvestHelperSchema);

/*
In this model, userId is a string that uniquely identifies the user, and plants is an array of objects, each representing a plant. 
Each plant object includes the plant's common name, scientific name, ID, and image URL, along with any other properties that will be stored from the Trefle API. 
Note that this is a basic example, and the actual model might need to be more complex depending on the application's requirements.
The HarvestHelper model would allow for storage of a list of plants for each user. 
Then, when the user logs in, retrieval all of their stored HarvestHelper data from previous logins.
*/
