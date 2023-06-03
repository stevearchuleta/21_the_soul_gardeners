/*
Imports the Mongoose library, which provides a straightforward, schema-based solution to model application data using MongoDB.
*/
const mongoose = require("mongoose");
/*
Creates a reference to the Schema object from Mongoose. 
This object is used to define data schemas.
*/
const Schema = mongoose.Schema;
/*
Defines a new schema for the DailyJournal model. 
This schema will be used to validate and structure the data in the MongoDB collection.
*/
const dailyJournalSchema = new Schema({
/*
This is a reference field that links the journal entry to the User model. 
The type of ObjectId indicates that this is a reference to another MongoDB document, specifically a User.
*/    
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  /*
  Defines the title field of the journal entry. 
  It should be a string and is required for each journal entry.
  */
  title: {
    type: String,
    required: true
  },
  /*
  Defines the content of the journal entry. 
  It should be a string and is required for each journal entry.
  */
  entry: {
    type: String,
    required: true
  },
  /*
  Defines a list of tags for the journal entry. 
  Each tag is a string. 
  This is not a required field; if no tags are provided, the field will be an empty list.
  */
  tags: [
    {
      type: String
    }
  ],
  /*
  Defines whether the journal entry is public or not. 
  It's a boolean field with a default value of false.
  */
  isPublic: {
    type: Boolean,
    default: false
  },
  /*
  Defines the date when the journal entry is created. 
  It is a Date field with a default value of the current date and time.
  */
  date: {
    type: Date,
    default: Date.now
  }
});
/*
Creates a model using the dailyJournalSchema and associates it with the "DailyJournal" collection in the database. 
If the collection doesn't exist, MongoDB will create it.
*/
const DailyJournal = mongoose.model("DailyJournal", dailyJournalSchema);
/*
Exports the DailyJournal model. 
This allows other files in the application to import and use the model for interacting with the DailyJournal collection in the database.
*/
module.exports = DailyJournal;

/*
As for editing, updating, and deleting entries, these operations are indeed typically handled in the controller file that interacts with this model. 
The controller would import this model and use Mongoose's built-in methods to manipulate the data. 
The routes defined in the routes file would then link HTTP requests to these controller methods.
For example, a PUT request to /api/dailyJournals/:id might be linked to an update method in the `dailyJournalsController file, which could look something like this:


const DailyJournal = require('../models/dailyJournal');

exports.updateJournal = async (req, res) => {
  try {
    const updatedJournal = await DailyJournal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedJournal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


This function would update the journal entry in the database with the given id (req.params.id) with the new data provided in the request body (req.body). 
The { new: true } option tells Mongoose to return the updated document. 
If there's an error, it responds with a 400 status code and a message detailing the error.

The same idea applies to deleting an entry, where a DELETE request to /api/dailyJournals/:id might be linked to a delete method in the dailyJournalsController file:

const DailyJournal = require('../models/dailyJournal');

exports.deleteJournal = async (req, res) => {
  try {
    await DailyJournal.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: "Journal entry deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


Here, the function finds the journal entry with the given id (req.params.id) and removes it from the database. 
If successful, it responds with a 200 status code and a success message. 
If there's an error, it responds with a 400 status code and a message detailing the error.

To summarize, the models, controllers, and routes all work together to manage the data flow in the application. 
Models define the structure of the data and provide methods for interacting with 
the database, controllers handle the business logic of what to do with this data, and routes define the API endpoints that map to these controller functions.
*/