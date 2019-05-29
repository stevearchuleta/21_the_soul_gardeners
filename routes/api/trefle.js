const router = require("express").Router();
const trefleController = require("../../controllers/trefleController");
// const jwt = require('jsonwebtoken');
// const isAuthenticated = require("../../controllers.authentication");



// Matches with "/api/trefles"
router.route("/:name")
  .get(trefleController.getTrefle)


module.exports = router;