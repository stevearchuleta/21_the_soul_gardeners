// const jwt = require('jsonwebtoken');
// const isAuthenticated = require("../../controllers.authentication");

const router = require('express').Router();
const inspirationsController = require('../../controllers/inspirationController');

// Matches with "/api/inspirations"
router.route('/')
  .get(inspirationsController.findAll)
  .post(inspirationsController.create);

// Matches with "/api/inspirations/:id"
router.route('/:id')
  .get(inspirationsController.findById)
  .put(inspirationsController.update)
  .delete(inspirationsController.remove);

module.exports = router;
