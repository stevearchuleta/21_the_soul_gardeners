const router = require("express").Router();
const harvestHelperController = require("../../controllers/harvestHelperController");
// const isAuthenticated = require("../../controllers.authentication");


// Matches with "/api/harvestHelper"
router
  // .use(isAuthenticated)
  .route("/")
  .get(harvestHelperController.getHarvestHelper)


module.exports = router;