const router = require("express").Router();
const trefleController = require("../../controllers/trefleController");


// Matches with "/api/trefles"
router.route("/")
  .get(trefleController.getTrefle)


module.exports = router;