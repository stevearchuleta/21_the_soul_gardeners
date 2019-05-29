const router = require("express").Router();
// const jwt = require('jsonwebtoken');
const gardenTipsController = require("../../controllers/gardenTipsController");
// const isAuthenticated = require("../../controllers.authentication");




// Matches with "/api/gardenTips"
router
  // .use(isAuthenticated)
  .route("/:category")
  .get(gardenTipsController.getGardenTips)


module.exports = router;