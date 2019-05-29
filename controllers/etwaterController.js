
const axios = require('axios');
const db = require("../models");

 
module.exports = {
  getEtWater: function(req, res) {
    console.log(req.params);
    axios.get(" https://developer-api.etwater.com/api/v1/hello-unity/auth",{ Authorization: "Bearer MDhlODdhZmUyMWVhNmI0OWJmYzZiZjg5MDIzYTAxNGY4ZWI2MjBkNzkwOWU5YWE5NDRjOWQ0ZTZjODk0MWQxMQ"})

    // "https://developer-api.etwater.com/api/v1/gardening/region-types"

    // req.params.name + )
    // .then((d) => res.status(200).send(d.data))
    // .catch(err => res.status(422).json(err));
  }

};

// export default etwaterController