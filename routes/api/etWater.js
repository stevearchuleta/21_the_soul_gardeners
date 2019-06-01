// const jwt = require('jsonwebtoken');

const router = require("express").Router();
const etWaterController = require("../../controllers/etWaterController");


// Matches with "/api/etwater"
router.route("/")
  .get(etWaterController.getEtWater)


module.exports = router;