const router = require("express").Router();
const gardenTipsController = require("../../controllers/gardenTipsController");


// Matches with "/api/gardenTips"
router.route("/:category")
  .get(gardenTipsController.getGardenTips)


module.exports = router;