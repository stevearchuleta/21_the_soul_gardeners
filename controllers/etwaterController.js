
const axios = require('axios');
const db = require("../models");

 
module.exports = {
  getEtWater: function(req, res) {
    // console.log(req.params);
    axios.get("https://developer-api.etwater.com/api/v1/atmosphere/daily?longitude=-117.24061&latitude=32.824218&startTimestamp=1558623086&endTimestamp=1559746286", { Authorization: "Bearer MDhlODdhZmUyMWVhNmI0OWJmYzZiZjg5MDIzYTAxNGY4ZWI2MjBkNzkwOWU5YWE5NDRjOWQ0ZTZjODk0MWQxMQ"})
    .then(res => console.log(res.data))
    
    // "https://developer-api.etwater.com/api/v1/gardening/region-types"
    // https://developer-api.etwater.com/api/v1/hello-unity/auth
    
    // req.params.name)
    // .then((d) => res.status(200).send(d.data))
    // .catch(err => res.status(422).json(err));
  }

};

// export default etwaterController