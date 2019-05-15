const router = require("express").Router();
const harvestHelperController = require("../../controllers/harvestHelperController");


// Matches with "/api/harvestHelper"
router.route("/")
  .get(harvestHelperController.getHarvestHelper)


module.exports = router;