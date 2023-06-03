// Defining methods for the harvestHelperController
 
// Importing axios for making HTTP requests
/*
Imports a package named axios. 
This package allows the code to send and receive information from other websites.
The axios library is a promise-based HTTP client for making HTTP requests. 
It can be used in both the browser and Node.js environments.
No direct connections to other files, but Axios is often used to interact with APIs, and may provide data that is used by other files.
*/
const axios = require('axios');

// Importing models to interact with the database
/*
Imports the db object from the models folder. 
This object lets the code interact with the database.
The db object is imported from the models directory. 
This object represents the database and includes methods for interacting with it.
This object is used to interact with the data models defined in the models directory.
*/
const db = require("../models");

// Your Trefle API token
/*
Creates a constant named TREFLE_TOKEN that holds the value of 'YOUR_TREFLE_TOKEN'. 
This is a placeholder and should be replaced with a real token.
Declares a constant TREFLE_TOKEN that should contain the API access token for the Trefle API. 
Constants in JavaScript are block-scoped, much like variables defined using the let keyword. 
The value of a constant cannot change through re-assignment.
No direct connections to other files, but the value of this constant could be determined by 
information from other files, like a configuration file or environment variables.
*/
const TREFLE_TOKEN = 'YOUR_TREFLE_TOKEN'; // replace with your actual token

// Defining methods for the harvestHelperController
/*
This makes the functions inside the yellow curley braces available to other files that import this one.
module.exports is used to expose functions or variables for other modules to use. 
In this case, it is exposing the getHarvestHelper function.
Other files can import this module to use the getHarvestHelper function. 
For example, a routes file might import this module to use getHarvestHelper as a route handler.
*/
module.exports = {
  // `getHarvestHelper` is an async function, allowing use of await keyword within it
  /*
  Defines an asynchronous function named getHarvestHelper. 
  This function can perform tasks that take some time, and 
  it won't stop the rest of the program while it waits for these tasks to complete.
  This is an async function definition. 
  The async keyword indicates that the function returns a promise, and 
  it allows the use of the await keyword within the function. 
  req and res represent the HTTP request and response objects, respectively.
  This function could be used as a route handler in a routes file. 
  In that case, req and res would be provided by Express.js when a request is made to the associated route.
  */
  getHarvestHelper: async function(req, res) {
    try {
      // Construct the URL for the API request
      const url = `https://trefle.io/api/v1/plants?filter_not%5Bedible_part%5D=null&token=${TREFLE_TOKEN}`;

      // Using the await keyword to wait for the axios GET request to complete
      /*
      Sends a GET request to the url and waits for the response. 
      It stores this response in a constant named response.
      This line sends a GET request to the Trefle API and awaits the response. 
      The await keyword pauses the async function execution until the promise resolves, then 
      resumes the async function execution and returns the resolved value.
      This line doesn't directly interact with other files, but 
      the url could be constructed based on data from other parts of the app.
      */
      const response = await axios.get(url);

      // If successful, send the data received from the Trefle API as the response
      /*
      Sends back a response with a status code of 200 (which means "OK") and the data received from the Trefle API.
      This line uses the Express.js response object to send a response with 
      a 200 status code and the data received from the Trefle API as the body of the response.
      This code interacts with the client-side or other server-side files that 
      made the original request to the /api/harvestHelper endpoint.
      */
      res.status(200).send(response.data);

      /*
      If there's an error while the code is running, it gets handled here. 
      The err object contains information about what went wrong.
      The catch clause in a try-catch statement catches exceptions that are thrown in the try block. 
      In this case, any errors that occur during the API request are caught here.
      Errors caught here could be logged to an error logging service or file, or 
      they could be sent back to the client-side for display.
      */
    } catch (err) {
      // If an error occurs during the request, send a 422 status code and the error message
      /*
      If there's an error, it sends back a response with a status code of 422 (which generally means "Unprocessable Entity") and the error message.
      If an error occurs during the request, this line uses the Express.js response object to 
      send a response with a 422 status code and the error message as the body of the response, formatted as JSON.
      This code interacts with the client-side or other server-side files that made the original request to 
      the /api/harvestHelper endpoint, providing them with details about the error that occurred.
      */
      res.status(422).json(err);
    }
  },

  create: async function(req, res) {
    const { userId, plants } = req.body;
  
    try {
      const newHarvestHelper = new HarvestHelper({
        userId,
        plants,
      });
  
      const savedHarvestHelper = await newHarvestHelper.save();
      res.json(savedHarvestHelper);
    } catch (err) {
      res.status(422).json(err);
    }
  },

  find: async function(req, res) {
    const { userId } = req.params;
  
    try {
      const harvestHelper = await HarvestHelper.find({ userId });
      res.json(harvestHelper);
    } catch (err) {
      res.status(422).json(err);
    }
  },
  
  
  // Update method
update: async function(req, res) {
  const { userId, plants } = req.body;

  try {
    // Find the HarvestHelper document by userId and update it with the new plant data
    const updatedHarvestHelper = await HarvestHelper.findOneAndUpdate(
      { userId: userId },
      { $set: { plants: plants } },
      { new: true }  // This option returns the updated document
    );

    if (!updatedHarvestHelper) {
      return res.status(404).json({ message: 'HarvestHelper not found' });
    }

    // If successful, send the updated document as the response
    res.json(updatedHarvestHelper);
  } catch (err) {
    // If an error occurs during the request, send a 422 status code and the error message
    res.status(422).json(err);
  }
},

// Delete method
delete: async function(req, res) {
  const { userId } = req.params;

  try {
    // Find the HarvestHelper document by userId and delete it
    const deletedHarvestHelper = await HarvestHelper.findOneAndDelete({ userId: userId });

    if (!deletedHarvestHelper) {
      return res.status(404).json({ message: 'HarvestHelper not found' });
    }

    // If successful, send a message indicating successful deletion
    res.json({ message: 'HarvestHelper successfully deleted' });
  } catch (err) {
    // If an error occurs during the request, send a 422 status code and the error message
    res.status(422).json(err);
  }
}



};

/*
This comment indicates that harvestHelperController should be exported, which 
means it can be used in other files. 
However, the line is commented out, so it isn't doing anything right now.
This commented-out line suggests that the harvestHelperController should be exported as 
the default export from the module. However, since the line is commented out, 
it doesn't have any effect. The actual exporting is done with module.exports earlier in the file.
If this line were uncommented and used instead of module.exports, it would allow other files to import harvestHelperController without using curly braces. 
However, it's generally more common in Node.js to use module.exports as shown in the actual code.
*/
// export default harvestHelperController

/*
Note: The axios.get function in the async function returns a promise. 
The await keyword is used to pause the execution of the async function until the promise is resolved. 
If the promise is fulfilled, the value is returned. 
If the promise is rejected, an error is thrown and caught in the catch block.
*/