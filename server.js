// import necessary modules like:
//  express for creating the server, 
// mongoose for interacting with MongoDB, 
// routes for defining application endpoints, 
// and jsonwebtoken (jwt) for managing JSON Web Tokens for authentication.
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const jwt = require("jsonwebtoken");

// set up an Express application with express(), 
// and choose a port for the server to listen on.
const app = express();
const PORT = process.env.PORT || 3001;

// app.use()
// DEFINE MIDDLEWARE with app.use(). (HANDLE JSON & HANDLE URL, SERVE STATIC FILES, ROUTE API & ROUTE VIEW & ROUTE AUTH)
// This includes URL encoding 
// and JSON parsing middleware, 
// which allow the app to handle JSON and URL encoded data. 
// When in production (i.e., deployed, probably on Heroku), 
// it serves up the client/build directory as static files. 
// This is necessary because when creating a production build of a React app, 
// it compiles into static files that can be served by the express server.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//  configure Express to serve static files from the public directory
//  middleware function that tells Express to serve static files from a directory named 'public' at the root level of the app.
app.use(express.static('public'));
// this middleware serves static files from the "client/build" directory. 
// This line of code is executed only if the environment is "production" (usually on heroku), which would likely be the case when this app is deployed.
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// tell the app to use the routes defined in the routes module.
// This line is using the router that you exported from your routes/index.js file. 
// This router contains the other routing middleware (/api routes and possibly /auth routes).
// In other words, app.use(routes) imports the routes/index.js file.
app.use(routes);
// routes.initialize(app);

// Connect to the Mongo DB
// connect to the MongoDB database. 
// The app uses the MongoDB connection string from the environment variable MONGODB_URI if it exists (which it will in a deployed environment); 
// otherwise, it falls back to using a local MongoDB database at mongodb://localhost/inspiration.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/inspirationseed");

// Start the API server
// start the server listening on the specified port and logs a message to the console.
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// SUMMARY OF MIDDLEWARE IN server.js
// express.urlencoded({ extended: true })
// express.json()
// express.static("client/build")
// app.use(routes)

// some middleware (like router.post('/testing', ...) and 
// router.use("/api", apiRoutes)) might not be explicitly using the app.use() function, 
// but they're still middleware because they handle the request and response in the Express.js request-response cycle.

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
Endpoint	        An endpoint refers to a specific URL where an API can be accessed. In a broader sense, it could also refer to a server, a service, or a database. In web development, it often refers to the part of the URL which comes after the base URL. For instance, in https://api.example.com/users, /users is an endpoint.

Path	            A path is the part of the URL that comes after the domain name. It usually refers to the directory or file on the server. For example, in https://example.com/blog/post1, /blog/post1 is the path. It is the specific location where a resource is stored.

Route	            A route is a definition of a URL pattern and the code to run when that URL pattern is matched. Routes connect URLs (or paths) to the logic that gets executed when a client makes a request to that URL. For instance, you may define a route in your application like app.get('/users', usersController.getAll) which means when a GET request is made to the /users URL, the getAll method of usersController is executed.

                  So, while there is overlap, these terms are not exactly synonymous. An endpoint is a specific URL where a service can be accessed, a path is the part of the URL indicating resource location, and a route is the mechanism to direct requests to different parts of your application based on the URL and HTTP verb.

*/
