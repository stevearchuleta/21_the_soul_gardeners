// This file represents the route definition for /api/gardenTips. It's a fairly straightforward setup:

const router = require("express").Router();
// JWT-based authentication
// const jwt = require('jsonwebtoken');
const gardenTipsController = require("../../controllers/gardenTipsController");
// The isAuthenticated middleware function is probably designed to verify the JWT and either proceed to 
// the next middleware (the route handler) or return an error response. If you plan to secure these routes later, you can uncomment these lines.
// const isAuthenticated = require("../../controllers.authentication");




// Matches with "/api/gardenTips"
// The route path is /:category, which means it will match any URL that follows the pattern /api/gardenTips/<something>. 
// The <something> part is a route parameter named category.
router
  // .use(isAuthenticated)
  .route("/:category")
  // When a GET request is made to this route, the getGardenTips function from gardenTipsController is invoked to handle the request.
  .get(gardenTipsController.getGardenTips)


module.exports = router;