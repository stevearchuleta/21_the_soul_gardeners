/*
This line imports your Mongoose models. 
In the models directory, there should be a file that defines the dailyJournal schema and model.	
The dailyJournal model is used within this file to interact with the dailyJournal collection in your MongoDB database.
*/
const db = require("../models");

// Defining methods for the dailyJournalController
/*
This line exports an object that contains methods for handling HTTP requests. 
These methods interact with the database using Mongoose's model methods like create, find, findById, findOneAndUpdate, and remove.	
These methods are imported in routes/api/dailyJournal.js and assigned as handlers for specific routes.
*/
module.exports = {
/*
This function creates a new daily journal entry. 
It gets the data from req.body and creates a new document in the database. 
If successful, it sends back the created document in the response. 
If an error occurs, it sends back a 422 status code and the error.	
This method is used as the handler for POST requests to '/dailyjournalendpoint' in routes/api/dailyJournal.js.
*/
create: async function(req, res) {
  try {
    const dbModel = await db.dailyJournal.create(req.body);
    res.json(dbModel);
  } catch (err) {
    res.status(422).json(err);
  }
},
/*
This function gets all the daily journal entries, sorted in descending order of date.	
The findAll method in the dailyJournalsController.js file seems to be correctly set up to handle the GET request at the endpoint /dailyJournal. 
This method finds all the journal entries stored in the database, sorts them by date in descending order, then sends the result as a JSON response. 
If any error occurs during this process, it sends a status code of 422 and the error.
Note: req.query allows me to pass query parameters in the GET request, so I can filter the journal entries I get back. 
For example, if I have a query parameter like /dailyJournal?author=John, then req.query would be { author: "John" }, and the .find(req.query) would only 
return journal entries authored by John.
If I don't pass any query parameters, then req.query is an empty object {}, and .find(req.query) returns all journal entries, 
which is what is expected for the findAll method.
*/
findAll: async function(req, res) {
  try {
    const dbModel = await db.dailyJournal.find(req.query).sort({ date: -1 });
    res.json(dbModel);
  } catch (err) {
    res.status(422).json(err);
  }
},
/*
This function gets a specific daily journal entry by its id.
*/
findById: async function(req, res) {
  try {
    const dbModel = await db.dailyJournal.findById(req.params.id);
    res.json(dbModel);
  } catch (err) {
    res.status(422).json(err);
  }
},
/*
This function updates a specific daily journal entry by its id.	
It could be used as a handler for PUT requests to a route like '/dailyjournalendpoint/:id' (which is not defined in the code you provided).
*/
update: async function(req, res) {
  try {
    const dbModel = await db.dailyJournal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(dbModel);
  } catch (err) {
    res.status(422).json(err);
  }
},
  remove: async function(req, res) {
    try {
      const dbModel = await db.dailyJournal.findByIdAndRemove(req.params.id);
      res.json({ message: "Journal entry deleted successfully" });
    } catch (err) {
      res.status(422).json(err);
    }
  }
};

/*
To use these controller methods, appropriate HTTP routes need to be defined in routes/api/dailyJournal.js and the associate these routes with the controller methods. 
The routes file, routes/api/dailyJournal.js , should import this controller and use its methods as handlers for HTTP requests at specific endpoints.
*/