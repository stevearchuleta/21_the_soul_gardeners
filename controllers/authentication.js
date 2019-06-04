const jwt = require("jsonwebtoken");

// JWT Middleware (written by Sung to avoid having to write the same authentication funciton in each component; this way... the Authentication (like all middleware funcitons) is always run before everything else. First he put this code inside the server.js file, then he showed us that it's best placed into its own controller file).
module.exports = function(req, res, next){
  const token = req.header("Authorization");
  let bearer = "";
  if (token) {
    bearer = token.replace("Bearer ", "");
  } else {
    return res.status(403).json({
      error: "Authorization Required"
    })
  }

  jwt.verify(bearer, "super-secret", function(err, decoded){
    if(err){
      return res.status(403).json({
        error: "Authorization Required"
      })
    }
    console.log(decoded);
    req.user = decoded;
    next();
  });
  };