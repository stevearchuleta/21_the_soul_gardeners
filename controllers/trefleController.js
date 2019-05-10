const db = require("../models");

// Defining methods for the trefleController
module.exports = {
  getTrefle: function(req, res) {
    axios.get("https://trefle.io/api/plants{id}/?token=MDdQVTNYMyttcFp5T2xIdU9tS1k4QT09").then((d) => res.status(200).send(d.data))
  }
};

// export default trefleController