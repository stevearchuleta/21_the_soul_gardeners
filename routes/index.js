// This index.js file within the routes directory is in charge of handling routing for this Express application
// the active process initiated by running index.js imports the necessary modules: 

// path for handling and transforming file paths, 
const path = require("path");
// express for handling server requests, 
// the active process initiated by running index.js sets up a router with express.Router() which can be used to define endpoints.
const router = require("express").Router();
// and apiRoutes which are API route handlers.
const apiRoutes = require("./api");

//const authRoutes = require("./auth/auth.routes");

// MIDDLEWARE (an Express Route Handler)
// APP.post route TESTING
// the active process initiated by running index.js defines a POST endpoint at the path /testing for testing purposes, 
// which logs the body of the request and returns a string as a response.
router.post('/testing', function(req, res){
   console.log('USER COMMENT: ' ,req.body);
   res.send("I'M WORKING!");
});

// MIDDLEWARE
// API Routes
// the active process initiated by running index.js uses the apiRoutes for all paths that start with /api
// use apiRoutes module for all paths that start with /api
router.use("/api", apiRoutes);

// MIDDLEWARE
// Authorization Routes
// // the active process initiated by running index.js uses the authRoutes is used for all paths starting with /auth.
// // use authRoutes module for all paths that start with /auth
//router.use("/auth", authRoutes);

// MIDDLEWARE
// If no API routes are hit, send the React app
//  If uncommented and active, 
// this function would handle all requests that were not caught by the previous routes (herein, /api routes and possibly /auth routes). 
// The function's role is to respond to any such requests with the index.html file from the built React application. 
// This pattern is common in applications that use React Router for client-side routing.
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

//export the router so that it can be used in server.js.
module.exports = router;


// SUMMARY OF MIDDLEWARE IN routes/index.js
// router.post('/testing', function(req, res){...})
// router.use("/api", apiRoutes) - The use of apiRoutes router.
// router.use(function(req, res) {...}) 

// In the context of an Express.js application, middleware is any function that has access to 
// the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. 
// Middleware functions can perform a variety of tasks, including but not limited to:
// - Execute any code.
// - Make changes to the request and the response objects.
// - End the request-response cycle.
// - Call the next middleware in the stack.
// - In Express, middleware functions are invoked in sequence, and when invoked, they can either end the request/response cycle or call the next middleware in line.


/*
Term	            Description
Endpoint	         An endpoint refers to a specific URL where an API can be accessed. In a broader sense, it could also refer to a server, a service, or a database. In web development, it often refers to the part of the URL which comes after the base URL. For instance, in https://api.example.com/users, /users is an endpoint.

Path	            A path is the part of the URL that comes after the domain name. It usually refers to the directory or file on the server. For example, in https://example.com/blog/post1, /blog/post1 is the path. It is the specific location where a resource is stored.

Route	            A route is a definition of a URL pattern and the code to run when that URL pattern is matched. Routes connect URLs (or paths) to the logic that gets executed when a client makes a request to that URL. For instance, you may define a route in your application like app.get('/users', usersController.getAll) which means when a GET request is made to the /users URL, the getAll method of usersController is executed.

                  So, while there is overlap, these terms are not exactly synonymous. An endpoint is a specific URL where a service can be accessed, a path is the part of the URL indicating resource location, and a route is the mechanism to direct requests to different parts of your application based on the URL and HTTP verb.

*/
