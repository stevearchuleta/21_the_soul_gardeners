// Importing mongoose, a MongoDB object modeling tool
/*
This line commands the computer to fetch a tool known as "mongoose". 
The mongoose module gets imported, providing a direct, schema-based solution for modeling application data. 
It comes equipped with built-in type casting, validation, query building, business logic hooks, and more. 
This file has a connection to any other file that imports this models/forums.js file and the mongoose module.
*/
const mongoose = require('mongoose');

// Defining the Forum schema
/*
This blueprint, known as the schema, facilitates the construction of new forums. 
It outlines the specifics every forum should possess. 
It creates a new instance of a mongoose Schema, thereby defining the data structure, default values, validators, etc. 
The ForumSchema gets defined with title, content, user, comments, likes, views, and date fields. 
This file has a link to the User and Comment models, and any other file that imports the Forum model.
*/
const ForumSchema = new mongoose.Schema({
  // Defining the title field as a required string
  /*
Every forum needs a title, and this title must take the form of text. 
This part defines the title attribute of a Forum document (schema property called title) as a required string. 
It has no direct connection to other files but gets employed when creating or updating Forum instances.
  */
title: {
    type: String,
    required: true,
    maxlength: 106,
  },
  // Defining the content field as a required string
  /*
  Every forum must have content, and that content must be text. 
  This section defines the content property of a Forum document as a required string. 
  Not directly connected to other files, but will be used when creating or updating Forum instances.
  */
  content: {
    type: String,
    required: true,
    maxlength: 3000,
  },
  // Defining the user field as an ObjectId, referencing the User model
  /*
  Every forum must be created by a user, and that user is referenced by their unique ID.
  This section defines the user property as a reference to the User model, using a unique ID stored in MongoDB. 
  This creates a relation between the Forum model and User model where a forum is linked to the user that created it.
  This connects to the User model and any controller or API endpoint that adds, retrieves, updates, or removes forums. 
  It is used to fetch or update the user related to a specific forum, and will also be updated when the User model changes (e.g., if a user is deleted).
  */
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  // Defining the comments field as an array of ObjectIds, each referencing the Comment model
  /*
  Forums can have many comments. 
  Each comment is referred to by its unique ID.
  This section defines the comments property as an array of references to the Comment model, allowing for multiple comments to be associated with each forum.
  This connects to the Comment model and any controller or API endpoint that adds, retrieves, updates, or removes comments associated with the forum.
  */
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
    maxlength: 1500,
  }],
  // Adding a likes field to track number of likes, initialized at 0
  /*
  Each forum starts with zero likes. 
  The number of likes can go up.
  This section defines the likes property as a number and initializes it to 0. 
  It's used to keep track of how many likes the forum post has received.
  This is not directly connected to other files but will be updated by controller or API endpoint when a user likes the forum post.
  */
  likes: {
    type: Number,
    default: 0,
  },
  // Adding a views field to track number of views, initialized at 0
  /*
  Each forum starts with zero views. 
  The number of views can go up.
  This section defines the views property as a number and initializes it to 0. 
  It's used to keep track of how many views the forum post has received.
  This is not directly connected to other files but will be updated by controller or API endpoint when a user views the forum post.
  */
  views: {
    type: Number,
    default: 0,
  },
  // Defining the date field as a Date, defaulting to the current date and time
  /*
  	Each forum has a date which is the date and time it was created.
    This section defines the date property as a Date type, which defaults to the current date and time when the forum post is created.
    Not directly connected to other files, but will be used when creating or updating Forum instances.
  */
  date: {
    type: Date,
    default: Date.now,
  },
});

// Exporting the Forum model for use in other files
/*
This line makes the forum blueprint available to be used in other parts of the app.
This exports a model object created from the ForumSchema, allowing it to be imported and used in other files. 
The model represents forums in the MongoDB database.
This connects to any file that requires the Forum model, such as controllers or routes that handle CRUD operations for forums.
*/
module.exports = mongoose.model('Forum', ForumSchema);

/*
Each of these aspects of the models/forums.js file works in tandem with the controllers, routes, and API files. 
The controllers use this model to create, read, update, and delete (CRUD) forum data in the MongoDB database. 
The routes define the URL paths that map to these controller actions. 
The API files then use these routes to make the corresponding HTTP methods (GET, POST, PUT, DELETE) available for client-side requests.
*/


/*
This schema defines a forum document with the following properties:

title: A string that represents the title of the forum. This is a required field.
content: A string that represents the content of the forum. This is a required field.
user: An ObjectId linking to a User document. This represents the user who created the forum.
comments: An array of ObjectIds (linking to Comment documents). These represent the comments made on the forum.
likes: A number representing the count of likes on the forum, initialized at 0.
views: A number representing the count of views on the forum, initialized at 0.
date: A date representing when the forum was created. By default, it is set to the current date and time.

Please note that this schema is assuming the existence of User and Comment models. 
If these models do not exist, one will need to create them or modify the Forum schema accordingly. 
This schema is quite simplistic and more fields may need to be added depending on the application's requirements. 
For example, fields for tracking shares or ratings might be required.

The mongoose module gets imported to provide a straightforward, schema-based solution to model application data.
It includes built-in type casting, validation, query building, business logic hooks and more, out of the box. 

This schema works in tandem with controllers, routes, and API files in the application. 
Controllers use this model to create, read, update, and delete (CRUD) forum data in the MongoDB database. 
Routes define the URL paths that map to these controller actions. 
API files then use these routes to make the corresponding HTTP methods (GET, POST, PUT, DELETE) available for client-side requests.
*/
