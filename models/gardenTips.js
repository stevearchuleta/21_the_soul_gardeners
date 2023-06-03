const mongoose = require('mongoose');

// get a reference to the mongoose Schema constructor
const Schema = mongoose.Schema;

// create a new Schema object for Garden Tips
const GardenTipSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  paragraph: {
    type: String,
    required: true
  }
});

// create a new model from the GardenTipSchema
const GardenTip = mongoose.model('GardenTip', GardenTipSchema);

module.exports = GardenTip;
 
/*
This is a simple model where every garden tip has a title and a paragraph, both of which are required.
This model allows for the creation of new Garden Tips in the database, and 
this model is easily expandable if additional fields are to be added to the Garden Tips in the future.
*/