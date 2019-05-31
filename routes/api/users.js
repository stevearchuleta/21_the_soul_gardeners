const router = require ('express').Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route('/register')
  .post(usersController.create);

  router.route('/login')
  .post(usersController.create);
  
  
  module.exports = router;