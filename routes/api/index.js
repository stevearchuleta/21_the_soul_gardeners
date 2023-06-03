// This index.js file in your api directory (under the routes folder) sets up all the routes for your API.

// Express's Router is imported for creating modular mountable route handlers.
const router = require("express").Router();

// Various route modules are imported. 
// These include routes for users, harvest helper, garden tips, et water, and daily journals.

// this means that any URL path that starts with '/api/users' will use the routes defined in the users.js file.
const userRoutes = require("./users");
// this means that any URL path that starts with '/api/harvestHelper' will use the routes defined in the harvestHelper.js file.
const harvestHelperRoutes = require("./harvestHelper");
// this means that any URL path that starts with '/api/gardentTips' will use the routes defined in the gardentTips.js file.
const gardenTipsRoutes = require("./gardenTips");
// 
const forumsRoutes = require("./forums");
// this means that any URL path that starts with '/api/etWater' will use the routes defined in the etWater.js file.
const etWaterRoutes = require("./etWater");
// this means that any URL path that starts with '/api/dailyjournal' will use the routes defined in the dailyJournals.js file.
const dailyJournalRoutes = require("./dailyJournals");
// this means that any URL path that starts with '/api/inspirations' will use the routes defined in the inspirations.js file.
const poetryRoutes = require("./inspirations");
// this means that any URL path that starts with '../../controllers.authentication' will use the routes defined in the authentication.js file.
const isAuthenticated = require("../../controllers.authentication");
const twilio = require("./twilio");
const agora = require("./agora");
const firebase = require("./firebase");


// router.post('/dailyJournal', function(req, res){
//    console.log('USER COMMENT: ', req.body);
//    res.send("IM WORKING! 1-2-3");
// });


// MIDDLEWARE (ROUTE HANDLERS)
// User routes
// The use method of router is then invoked multiple times to add these route handlers to the router. 
// Each of these route handlers is associated with a different path. 
// For example, userRoutes handles all routes beginning with /users.
router.use("/users", userRoutes);
router.use("/harvestHelper", harvestHelperRoutes);
router.use('/gardenTips', gardenTipsRoutes);
router.use('/etWater', etWaterRoutes);
router.use('/dailyJournal', dailyJournalRoutes);
router.use("/inspirations", poetryRoutes);
router.use("/forums", forumsRoutes);
router.use('/twilio', twilioRoutes);
router.use('/agora', agoraRoutes);
router.use('/firebase', firebaseRoutes);

// router object is exported for use elsewhere in this application.
module.exports = router;


/*
Term	            Description
Endpoint	        An endpoint refers to a specific URL where an API can be accessed. In a broader sense, it could also refer to a server, a service, or a database. In web development, it often refers to the part of the URL which comes after the base URL. For instance, in https://api.example.com/users, /users is an endpoint.

Path	            A path is the part of the URL that comes after the domain name. It usually refers to the directory or file on the server. For example, in https://example.com/blog/post1, /blog/post1 is the path. It is the specific location where a resource is stored.

Route	            A route is a definition of a URL pattern and the code to run when that URL pattern is matched. Routes connect URLs (or paths) to the logic that gets executed when a client makes a request to that URL. For instance, you may define a route in your application like app.get('/users', usersController.getAll) which means when a GET request is made to the /users URL, the getAll method of usersController is executed.

                  So, while there is overlap, these terms are not exactly synonymous. An endpoint is a specific URL where a service can be accessed, a path is the part of the URL indicating resource location, and a route is the mechanism to direct requests to different parts of your application based on the URL and HTTP verb.

*/

