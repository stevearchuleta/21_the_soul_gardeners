const router = require("express").Router();
const trefleController = require("../../controllers/trefleController");


// Matches with "/api/trefles"
router.route("/:name")
  .get(trefleController.getTrefle)


module.exports = router;