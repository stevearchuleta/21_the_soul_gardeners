
const axios = require('axios');
const db = require("../models");

 
module.exports = {
  getEtWater: function(req, res) {
    console.log(req.params);
    axios.get("https://developer-api.etwater.com/api/v1/oauth/token"
    
    
//     curl "https://developer-api.etwater.com/api/v1/oauth/token" \
// -X POST \
// -H "Authorization: example string value" \
// -H "Content-Type: application/x-www-form-urlencoded" \
// --data "grant_type=example+string+value&username=example+string+value&password=example+string+value"
    

// GET /api/v1/atmosphere/hourly



    // + req.params.name + )
    // .then((d) => res.status(200).send(d.data))
    // .catch(err => res.status(422).json(err));
  // }

};

// export default trefleController