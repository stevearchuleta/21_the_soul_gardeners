
/*
It's important to understand that this schema is just defining the structure of data to be stored in MongoDB. 
It doesn't execute any queries against the database itself. 
Those operations would be handled elsewhere in your code, using the exported model.
*/

/*
This line imports the mongoose library, which provides a straight-forward, 
schema-based solution to model application data. It includes built-in type 
casting, validation, query building, business logic hooks, etc. 
It is designed to work in an asynchronous environment.
*/
const mongoose = require("mongoose");

/*
This section defines a schema for atmosphere data using the mongoose.Schema object. 
A schema in mongoose is a structure that defines the shape of the documents within a 
particular collection in MongoDB. This includes the types and values of the data.
*/
const AtmosphereDataSchema = new mongoose.Schema({
  startTimestamp: {
    type: Number,
    required: true
  },
  endTimestamp: {
    type: Number,
    required: true
  },
  data: {
    type: Array,
    required: true
  },
});

/*
This section defines a schema for ETWater using the mongoose.Schema object. 
This schema has two fields: 'geometry' and 'atmosphereData'. The 'geometry' 
field is an object with two properties, 'lng' and 'lat', and the 'atmosphereData' 
field uses the AtmosphereDataSchema we defined earlier.
*/
const ETWaterSchema = new mongoose.Schema({
  geometry: {
    lng: {
      type: Number,
      required: true
    },
    lat: {
      type: Number,
      required: true
    }
  },
  atmosphereData: AtmosphereDataSchema,
});

/*
This line creates a mongoose model from the ETWaterSchema, and assigns it to the 
'ETWater' variable. A mongoose model is a wrapper on the Mongoose schema that 
contains built-in instance methods. Mongoose also creates a collection with the 
pluralized version of the model name in the MongoDB database.
*/
const ETWater = mongoose.model("ETWater", ETWaterSchema);

/*
This line exports the ETWater model so that it can be required and used by other 
files in the project.
*/
module.exports = ETWater;


/*
If the goal is to save the ET Water data obtained from the API into a database for future use, 
I might want to create a Schema that represents the ET Water data. 
Assuming the API returns data in a format similar to this:

{
  "geometry": {
    "lng": -122.4194,
    "lat": 37.7749
  },
  "atmosphereData": {
    "startTimestamp": 1558623086,
    "endTimestamp": 1559746286,
    "data": [
      // Array of atmosphere data
    ]
}
}
*/ 
