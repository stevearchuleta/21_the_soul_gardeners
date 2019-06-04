const router = require ('express').Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route('/login')
  .post(usersController.login);


router.route('/register')
  .post(usersController.create);


  module.exports = router