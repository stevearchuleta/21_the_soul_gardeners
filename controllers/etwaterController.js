/*
This line imports the axios library, which is a promise-based HTTP client that 
works in the browser and in Node.js. It simplifies making HTTP requests.
*/
const axios = require("axios");
/*
In models/etWater.js a Schema for etWater was defined. In the line below, an instance of ETWater represents a piece of ET Water data for 
a specific location and timeframe, including the atmosphere data for that timeframe as defined in models/etWater.js a Schema for etWater.
To use this model in the etwaterController.js, the code would look something like this:
*/
const ETWater = require("../models/etWater");

/*
This line imports the models from the 'models' directory of the application. 
While the db object is not being used in this specific code block, it's usually used for database operations.
*/
const db = require("../models");

/*
The module.exports object makes the getEtWater function available for other modules when they require this module.
*/
module.exports = {
  /*
  This function, 'getEtWater', is an asynchronous function designed to handle requests. 
  It's declared as async, indicating that it returns a promise and can use the 'await' keyword to pause execution 
  until the promise is either fulfilled or rejected.
  */
  getEtWater: async function(req, res) {
    try {
      /*
      This line logs the 'region' parameter from the request to the console, which is useful for debugging purposes.
      */
      console.log(req.params.region);

      /*
      This line sends a GET request to the OpenCageData API, using axios. 
      The await keyword is used to wait until the promise is resolved and the API's response is available.
      */
      const regionInfo = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q="${
            req.params.region
          }"&key=7f6166b91c1343faac23e99b69da427a`
      );

      /*
      This line logs the 'geometry' property of the first result from the API's response to the console.
      */
      console.log(regionInfo.data.results[0].geometry);

      /*
      This line logs the constructed URL of the second API to the console.
      */
      console.log(`https://developer-api.etwater.com/api/v1/atmosphere/daily?longitude=${
            regionInfo.data.results[0].geometry.lng
          }&latitude=${
            regionInfo.data.results[0].geometry.lat
          }&startTimestamp=1558623086&endTimestamp=1559746286`);

      /*
      This line sends a GET request to the ETWater API, using axios. 
      The 'await' keyword is used to wait until the promise is resolved and the API's response is available.
      The Authorization header is set in the options argument of the axios.get method.
      */
      const etWaterResponse = await axios.get(
        `https://developer-api.etwater.com/api/v1/atmosphere/daily?longitude=${
              regionInfo.data.results[0].geometry.lng
            }&latitude=${
              regionInfo.data.results[0].geometry.lat
            }&startTimestamp=1558623086&endTimestamp=1559746286`,
        {
          headers: {
            Authorization:
              "Bearer " +
              "MDhlODdhZmUyMWVhNmI0OWJmYzZiZjg5MDIzYTAxNGY4ZWI2MjBkNzkwOWU5YWE5NDRjOWQ0ZTZjODk0MWQxMQ"
          }
        }
      );

      /*
The intention is to store the response data from the ETWater API into the database.
This operation would logically be situated within the getEtWater function inside the controllers/etwaterController.js file,
following the call to the ETWater API and prior to sending back the response.
This positioning allows access to the etWaterResponse and regionInfo data, which are required for storage.
The data creation and save operation occur right before sending the response back to the client,
ensuring that the data is preserved in the database prior to client communication.
However, this could extend the response time slightly as
the server must wait for the data to be recorded in the database before it can respond.
      */
// Prepare a new instance of ETWater to be saved into the database
// This instance is a JavaScript object whose structure adheres to the ETWater model/schema
let newETWaterData = new ETWater({
  // The geometry property is an object that includes longitude (lng) and latitude (lat)
  // Its values are retrieved from the regionInfo object, which was returned from a previous API request
  geometry: {
    lng: regionInfo.data.results[0].geometry.lng,
    lat: regionInfo.data.results[0].geometry.lat,
  },
  // The atmosphereData property is an object that includes a startTimestamp, an endTimestamp, and the data
  // Its values are retrieved from the etWaterResponse object, which was returned from a previous API request
  atmosphereData: {
    // Generate the current Unix timestamp in seconds as the startTimestamp
    // The Unix timestamp is the number of seconds that have elapsed since 00:00:00 Thursday, 1 January 1970
    startTimestamp: Math.floor(Date.now() / 1000),
    // The endTimestamp is set to the current Unix timestamp as well for simplicity, but you might want to adjust this depending on your needs
    endTimestamp: Math.floor(Date.now() / 1000),
    // The data property is set to the data received from the ETWater API
    data: etWaterResponse.data,
  },
});

// Save the new ETWater data instance to the database
newETWaterData.save(function (err) {
  if (err) {
    // Log any errors that occurred while saving to the console
    console.log(err);
  } else {
    // Log a success message to the console if the data was saved successfully
    console.log('ETWater data saved.');
  }
});

      
      newETWaterData.save(function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('ETWater data saved.');
        }
      });
      
      /*
      This line sends the API's response data as the response of the getEtWater function.
      */
      res.status(200).send(etWaterResponse.data)
    } catch (err) {
      /*
      This line logs the error message to the console in case of any errors during the execution of the try block.
      */
      console.log(err.message);
      /*
      This line sends a 400 status code along with a custom error message as the response of the getEtWater function
      if there is any error during the execution of the try block.
      */
      res.status(400).send({ msg: "something is wrong" });
    }
  }
};

/*
here's a table explaining asynchronous operations in JavaScript in a step-by-step manner to both beginner and intermediate-level developers:

Step	Beginner-level Explanation	Intermediate-level Explanation
1	JavaScript is single-threaded, meaning it can only do one thing at a time. 
  But with the help of asynchronous operations, it can start a task, move on to another, and come back to the first task when it's completed.	
  JavaScript's event loop model is single-threaded, but asynchronous operations are enabled by the use of Web APIs provided by 
  the browser (like setTimeout or XMLHttpRequest), which operate on separate threads.
2	The simplest way to create an asynchronous operation in JavaScript is using the setTimeout function. 
  It starts a task (like displaying a message) but doesn't wait for it to finish. Instead, it moves on to the next task.	
  In addition to setTimeout, other mechanisms like AJAX calls, event listeners, and Promises are used to create non-blocking operations. 
  These utilize the Web APIs to handle the operation, allowing JavaScript's single thread to continue executing other code.
3	Callbacks are functions that are passed to other functions as arguments and can be called when an operation is completed. 
  They're commonly used with asynchronous operations to specify what should happen after the operation finishes.	
  Callbacks can lead to "callback hell" when dealing with multiple nested asynchronous operations. 
  This is when you have callbacks inside callbacks inside callbacks, leading to code that is difficult to read and maintain.
4	Promises are a way to handle asynchronous operations without getting into "callback hell". 
  They represent an operation that hasn't completed yet, but is expected in the future. 
  A Promise is an object that can be in one of three states: pending, fulfilled, or rejected.	
  Promises are a higher-level abstraction over callbacks and provide a simpler, cleaner API for handling asynchronous operations. 
  They can be chained, making it easier to perform several asynchronous operations in sequence. They also provide better error handling mechanisms than callbacks.
5	The async/await syntax is a way to work with Promises in a more comfortable, synchronous-looking manner. 
  It makes it easier to understand and write asynchronous code.	The async/await syntax is syntactic sugar over Promises. 
  An async function implicitly returns a Promise. 
  The await keyword can only be used inside an async function and causes the function to pause and wait for the Promise to resolve or reject.
6	Error handling in asynchronous operations can be done using try/catch blocks with async/await, or .catch() with Promises. 
  This is necessary because errors in asynchronous operations aren't caught by regular try/catch blocks.	
  In Promises, unhandled promise rejections will be reported as errors. 
  With 'asynch/await', if a web developer forgets to 'await' a Promise (or if a web developer forgets to handle the Promise's rejection) then 
  the web developer's forgetfulness will result in unhandled promise rejections.  
  Therefore, proper error handling is essential when dealing with asynchronous operations.
*/

/*
In terms of how this file connects with other files in an Express.js application:

routes files: 
These files define routes that handle HTTP requests to various paths. 
In these files, you use the getEtWater function as a route handler. 
For example, a line like router.get('/etwater/:region', etWaterController.getEtWater);.

models files: 
These files define the schema and model for documents in the MongoDB database. 
The etWaterController file could interact with these models to perform CRUD operations on your database, 
although it doesn't in the current case.
If it did, it would interact with the database using methods like 
db.ModelName.create(), db.ModelName.find(), etc.

server.js (sometimes known in other apps as app.js):
This is the entry point file of the Express application. 
This file would use the require function to import the router from routes file, and 
then use app.use() to make your application use the router.

*/

/*
Here is an example of how you might adjust the timestamps to represent a one-hour range:
In this code, startTimestamp is the current time and endTimestamp is an hour later, which represents a time range of one hour.
let now = Math.floor(Date.now() / 1000); // the current timestamp in seconds
let oneHourLater = now + 3600; // the timestamp for one hour later

let newETWaterData = new ETWater({
  geometry: {
    lng: regionInfo.data.results[0].geometry.lng,
    lat: regionInfo.data.results[0].geometry.lat,
  },
  atmosphereData: {
    startTimestamp: now, // The current time as the start of the range
    endTimestamp: oneHourLater, // One hour later as the end of the range
    data: etWaterResponse.data,
  },
});

*/