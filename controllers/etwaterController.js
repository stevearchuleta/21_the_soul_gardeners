const axios = require("axios");
const db = require("../models");

module.exports = {
  getEtWater: async function(req, res) {
    console.log(req.params.region);
    axios
      .get(
        `https://api.opencagedata.com/geocode/v1/json?q="${
          req.params.region
        }"&key=7f6166b91c1343faac23e99b69da427a`
      )
      .then(regionInfo => {
        console.log(regionInfo.data.results[0].geometry);
        console.log(`https://developer-api.etwater.com/api/v1/atmosphere/daily?longitude=${
          regionInfo.data.results[0].geometry.lng
        }&latitude=${
          regionInfo.data.results[0].geometry.lat
        }&startTimestamp=1558623086&endTimestamp=1559746286`);
        axios
          .get(
            `https://developer-api.etwater.com/api/v1/atmosphere/daily?longitude=${
              regionInfo.data.results[0].geometry.lng
            }&latitude=${
              regionInfo.data.results[0].geometry.lat
            }&startTimestamp=1558623086&endTimestamp=1559746286`,
            {
              headers: {
                Authorization:
                  "Bearer " +
                  "MDhlODdhZmUyMWVhNmI0OWJmYzZiZjg5MDIzYTAxNGY4ZWI2MjBkNzkwOWU5YWE5NDRjOWQ0ZTZjODk0MWQxMQ"
              }
            }
          )
          .then(d => res.status(200).send(d.data))
          .catch(err => {
            console.log(err.data.message);
            res.status(400).send({ msg: "something is wrong" });
          });
      });
  }
};
