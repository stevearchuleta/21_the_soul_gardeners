// The dailyJournals.js route file is in line with the general router files structure. 
// It uses Express Router to define a POST endpoint at '/dailyjournalendpoint', which will call the create function from the dailyJournalController when hit.

const router = require ('express').Router();
const dailyJournalController = require("../../controllers/dailyJournalsController");


// TEST ROUTE
// If... if...
// if this test route was active, then this file, dailyjournal.js would have a conflict, 
// because Express wouldn't know which function to execute when a POST request is made due to the fact that 
// the path /dailyjournalpostendpoint is used in both router.route().post() functions .
// router.route('/dailyjournalendpoint').post(function(req, res){
//   console.log('USER COMMENT: ', req.body);
//   res.send("IM WORKING! A-B-C");
// });


// Matches with "/api/dailyjournalendpoint"
// router.route('/dailyjournalendpoint') sets up a route for the specified path.
//  This means that the route '/api/dailyjournal/dailyjounalendpoint' will respond to a POST request by executing the create function in the dailyJournalController because
// .post(dailyJournalController.create) means that when a POST request is made to this path, the create function in dailyJournalController is called.
// In other words, when a server is started and a POST request is made to '/api/dailyjournal/dailyjounalendpoint' from the frontend 
// (or from a tool like Postman), the router.route().post() function should hit this route. /dailyjournalendpoint, and execute the specified controller create function.
router.route('/')
  .get(dailyJournalController.findAll) // This line uses the findAll function as a GET request handler
  .post(dailyJournalController.create);
  /*
   With this next get route configuration, when I make a GET request to '/api/dailyJournal/ID' where ID is the id of a specific journal entry, 
   the server will handle that request using the findById method from the dailyJournalController. 
   The findById method will use the id from the request parameters (req.params.id) to find the specific journal entry in the database, 
   and it will send this entry back in the HTTP response.
   Make sure that the 'ID' in the request is replaced with an actual id from a daily journal entry in the database.
   Remember that the actual URL I will need to use will depend on how I've configured my server and routes. 
   If I am running the server locally, the full URL might be something like 'http://localhost:3001/api/dailyJournal/ID'.
  */
  router.route('/:id')
  .get(dailyJournalController.findById)
  /*
  Allows my Express app to handle PUT requests to "/dailyjournalendpoint/:id" by updating the daily journal entry with the given id. 
  The :id in the route is a URL parameter, which Express will replace with the actual value from the request URL. 
  This value can then be accessed in the controller through req.params.id.
  */
  .put(dailyJournalController.update) // This line uses the update function as a PUT request handler
  /*
  a DELETE route has been added to the /:id route. 
  This route uses the remove function from dailyJournalsController.js as a request handler. 
  So now, when a DELETE request is made to /api/dailyJournal/:id (with :id replaced by the id of the journal entry to delete), 
  it will call the remove function, which deletes the specified journal entry from the database.
  */
  .delete(dailyJournalController.remove);

  module.exports = router