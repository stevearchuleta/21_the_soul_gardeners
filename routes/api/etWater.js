// The etWater.js route file also looks fine. 

// JSON Web Tokens (JWT) are used for securely transmitting information between parties as a JSON object. 
// This information can be verified and trusted because it is digitally signed. 
// JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
// const jwt = require('jsonwebtoken');
// If codebase uses JWT for authentication elsewhere (or in future not written yet), 
// It would typically be used in middleware functions that protect certain routes. 
// For instance, a common practice is to send a JWT as a header in an HTTP request, 
// and then have a middleware function verify the JWT and 
// either allow the request to proceed or send back an error response if the JWT is invalid. 
// This middleware function would be added to any routes you want to protect.
const router = require("express").Router();
const etWaterController = require("../../controllers/etWaterController");


// Matches with '/api/etwater/{region}', assuming '/api' is the base URL for the API routes. 
// The {region} part should be replaced by the actual region when making a request.
// It has a GET endpoint at '/:region', which will call the getEtWater function from the etWaterController when hit. 
// The :region in the route is a route parameter, and it can be accessed in the request handler function using req.params.region.
router.route("/:region")
  .get(etWaterController.getEtWater)


module.exports = router;