
const axios = require('axios');
const db = require("../models");


// Defining methods for the trefleController
//"&lifespan=" + req.body.lifespan + "&bloom_period=" + req.body.bloomPeriod + 
module.exports = {
  getTrefle: function(req, res) {
    console.log(req.params);
    axios.get("https://trefle.io/api/plants?common_name=" + req.params.name + "&token=MDdQVTNYMyttcFp5T2xIdU9tS1k4QT09")
    .then((d) => res.status(200).send(d.data))
    .catch(err => res.status(422).json(err));

  }

};

// export default trefleController