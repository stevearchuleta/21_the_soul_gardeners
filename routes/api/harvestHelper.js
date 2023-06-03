// This file defines a single route / for the /api/harvestHelper endpoint.
// Create a new router object from Express to handle routing for the /api/harvestHelper endpoint.
const router = require("express").Router();
//  Import the harvestHelperController from the controllers directory, 
// which will include methods for handling specific HTTP requests (e.g., GET, POST, etc.) for the /api/harvestHelper route.
const harvestHelperController = require("../../controllers/harvestHelperController");

// Used for route protection or authorization purposes, meaning it checks if a user is authenticated before they can access certain routes. 
// const isAuthenticated = require("../../controllers.authentication");


// Matches with "/api/harvestHelper"
router
  // .use(isAuthenticated)
  // Define a route that listens to GET requests on the /api/harvestHelper endpoint. 
   .route("/")
  // When a GET request is made to this route, the getHarvestHelper method from harvestHelperController is called to handle the request.
  // When a GET request is made to this route, it will call the getHarvestHelper function defined in the harvestHelperController.
  .get(harvestHelperController.getHarvestHelper)

// Export the router object, so it can be imported in other files (like in the main server file to use this router for handling requests to /api/harvestHelper).
module.exports = router;