
const axios = require('axios');
const db = require("../models");
const cheerio = require('cheerio');


// Defining methods for the harvestHelperController
 

module.exports = {
  getGardenTips: function(req, res) {

    let category = req.params.category;
    console.log(req.params.category);
    //res.send(category);
    axios.get(`http://www.gardenanswers.com/${category}`)
    .then(function(response) {
      // res.send(response.data);
      // Load the html body from axios into cheerio
      var $ = cheerio.load(response.data);
        // Save the text and href of each link
      var articles = [];
      $("article.fusion-post-large").each((i, element) => {
        var title = $(element).find(".entry-title").text();
        // var link = $(element).find(".entry-title a").attr("href");
        var paragraph = $(element).find("p").text();
        articles.push({title, paragraph});
      });
        res.json({articles})
      
      })
      .catch(function (err){
        res.status(422).json(err.message);
      }) 
  }
};