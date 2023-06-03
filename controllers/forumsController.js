/*
This line of code is importing all the database models from the models directory. 
In this case, it's just the Forum model. The db constant is an object that contains the models of the MongoDB database. 
This object is exported from the models directory.
*/
const db = require("../models");

// Defining methods for the ForumController
module.exports = {
  /*
  This findAll method finds all the Forum documents in the database. 
  findAll sorts them by the date field in descending order (newest first). 
  If findAll method finds the documents successfully, it sends them back to the client as a JSON response. 
  If there's an error, it sends back a 422 HTTP status code along with the error. 
  This findAll method uses the find function of the Forum model with req.query as an argument to fetch all documents that match the query from the database. 
  It uses the sort function to sort the documents in descending order of the date. 
  It uses the then function to handle the promise returned by the find function and sends the result back as a JSON response. 
  If there's an error, it sends back a 422 HTTP status code along with the error.
  */
  findAll: async (req, res) => {
    try {
      const dbModel = await db.Forum.find(req.query).sort({ date: -1 });
      res.json(dbModel);
    } catch (err) {
      res.status(422).json(err);
    }
  },
  /*
  	This findById method finds a specific Forum document in the database by its ID. 
    The ID is passed in as a parameter in the request URL. 
    If the findById method finds the document successfully, it sends the document back to the client as a JSON response. 
    If there's an error, it sends back a 422 HTTP status code along with the error. 
    This findById method uses the findById function of the Forum model with req.params.id as an argument to fetch a specific document from the database. 
    It uses the then function to handle the promise returned by the findById function and sends the result back as a JSON response. 
    If there's an error, it sends back a 422 HTTP status code along with the error.
  */
    findById: async (req, res) => {
      try {
        const dbModel = await db.Forum.findById(req.params.id);
        res.json(dbModel);
      } catch (err) {
        res.status(422).json(err);
      }
    },
  /*
  	This create method creates a new Forum document in the database. 
    The data for the new document is passed in the request body. 
    If the create method creates the document successfully, it sends the document back to the client as a JSON response. 
    If there's an error, it sends back a 422 HTTP status code along with the error. 
    This create method uses the create function of the Forum model with req.body as an argument to create a new document in the database. 
    It uses the then function to handle the promise returned by the create function and sends the result back as a JSON response. 
    If there's an error, it sends back a 422 HTTP status code along with the error.
  */
    create: async (req, res) => {
      try {
        const dbModel = await db.Forum.create(req.body);
        res.json(dbModel);
      } catch (err) {
        res.status(422).json(err);
      }
    },
  /*
  This update method updates a specific Forum document in the database. 
  The ID of the document to update and the new data are passed in the request. 
  If the update method updates the document successfully, it sends the document back to the client as a JSON response. 
  If there's an error, it sends back a 422 HTTP status code along with the error. 
  This update method uses the findOneAndUpdate function of the Forum model with { _id: req.params.id } as the condition and req.body as the 
  new data to update a specific document in the database. 
  It uses the then function to handle the promise returned by the findOneAndUpdate function and sends the result back as a JSON response. 
  If there's an error, it sends back a 422 HTTP status code along with the error.
  */
  update: async (req, res) => {
    try {
      const dbModel = await db.Forum.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      res.json(dbModel);
    } catch (err) {
      res.status(422).json(err);
    }
  },
  /*
This remove method removes a specific Forum document from the database. 
The ID of the document to be removed is passed in as a parameter in the request URL. 
If the remove method successfully removes the document, it sends back a success message like "Forum post has been removed." to the client as a JSON response. 
If there's an error, the remove method sends back a 422 HTTP status code along with the error. 
This remove method uses the findById function of the Forum model with { _id: req.params.id } as an argument to fetch a specific document from the database. 
Then the remove method calls the remove function on the fetched document to remove it from the database. 
It uses the then function to handle the promise returned by the remove function and sends 
back a success message like "Forum post has been removed." to the client as a JSON response. 
If there's an error, it sends back a 422 HTTP status code along with the error.
  */

remove: async (req, res) => {
  try {
    await db.Forum.findByIdAndRemove(req.params.id);
    res.json({ message: "Forum post has been removed." });
  } catch (err) {
    res.status(422).json(err);
  }
}
};