
const axios = require('axios');
const db = require("../models");


// Defining methods for the harvestHelperController
 
module.exports = {
  getHarvestHelper: function(req, res) {
    
      // console.log(req.params);
      axios.get("http://harvesthelper.herokuapp.com/api/v1/plants?api_key=8cd0c084f7cd2c1ae34a9a476f166d44")
      .then((d) => res.status(200).send(d.data))
      .catch(err => res.status(422).json(err));
  }
};

// export default harvestHelperController