// The users module is handling two routes: /login and /register. 
// Both are using the HTTP POST method.

const router = require ('express').Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
// /login: When a POST request is made to this route, the login method from the usersController is called. 
// This method inside the usersController is probably responsible a user. 
// It may be checking the provided credentials against a database and sending back a response accordingly.
router.route('/login')
  .post(usersController.login);


 // /register: A POST request to this route calls the create method from the usersController. 
 // This method is likely creating a new user in the database with the information provided in the request.
router.route('/register')
  .post(usersController.create);


  module.exports = router


  /*
Overall, the users routes file is concise and follows the principles of RESTful API design. 
Each route corresponds to a specific resource and a specific action on that resource.

For a thorough review, you would need to open up the usersController and verify that the login and create methods are correctly implemented.
  */