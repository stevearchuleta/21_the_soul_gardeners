/*
This line gets a tool named "axios" to make requests to websites.
This line imports the "axios" library, a promise-based HTTP client for making HTTP requests from Node.js.
This line doesn't directly connect to other files in the app, but axios is installed via npm, and 
axios will be listed as a dependency in the package.json file.
*/
const axios = require("axios");

/*
This line gets a box named "db" that holds the information about garden tips.
This line imports the "db" object that represents the database models in the app, facilitating interactions with the MongoDB database.
This line connects to the models in the models directory of the app, which define the data structure for the garden tips that are stored in the database.
*/
const db = require("../models");

/*
This line gets a tool named "cheerio" that can read and understand website content.
This line gets a tool named "cheerio" that can read and understand website content.
This line imports the "cheerio" library, a fast, flexible, and lean implementation of core jQuery designed specifically for the server, 
used for parsing markup and providing an API for traversing/manipulating the resulting data structure.
This line doesn't directly connect to other files in the app, but 
cheerio is installed via npm, and it will be listed as a dependency in the package.json file.
*/
const cheerio = require("cheerio");

/*
	This makes sure that the enclosed instructions can be used by other files.
  This syntax exports an object that encapsulates the methods defined within it, 
  allowing these methods to be imported and called from other modules in the app.
  This connects to any file that requires or imports this module. 
  Typically, this would be the routes file where the getGardenTips function is called when a certain endpoint is hit.
*/
module.exports = {
  /*
  This line defines a function that retrieves garden tips from a website.
  This line declares an asynchronous function named getGardenTips that is a method of the exported object. 
  This function takes two parameters: req (the incoming HTTP request) and res (the outgoing HTTP response).
  This connects to the routes file where this method is invoked when the corresponding route is hit. 
  Also, this function interacts with the axios library to make HTTP requests and the cheerio library to parse the response.
  */
  getGardenTips: async function (req, res) {
    /*
    This line takes a piece of information named "category" from the incoming request.
    This line declares a variable named "category" and assigns it the value of req.params.category. 
    req.params holds route parameters, which are named URL segments used to capture values specified at their position in the URL.
    This value comes from the incoming HTTP request, which is typically sent from a client-side script or from a request made by another server-side route. 
    The specific route that triggers this controller method is defined in the routes file.
    */
    let category = req.params.category;
    try {
      // Check if data already exists in the database
      const existingData = await db.GardenTip.find({ category });

      if (existingData.length > 0) {
        // Send the existing data if it's already in the database
        res.json({ articles: existingData });
      } else {
        try {
          /*
      This line asks the "axios" tool to go to a website and bring back information.
      This line sends a GET request to the specified URL using the axios library. 
      It waits for the HTTP request to complete and the server's response to arrive before moving on to the next line of code. 
      This is achieved by using the await keyword, which can only be used inside an async function.
      This line doesn't directly connect to other files, but it does make an external HTTP request to the specified URL. 
      The response from this request is used within this controller method.
      */
          const response = await axios.get(
            `http://www.gardenanswers.com/${category}`
          );

          /*
      This line lets the "cheerio" tool read and understand the information brought back by "axios".
      This line loads the HTML data from the axios response into cheerio, allowing for it to be parsed and manipulated using jQuery-like syntax.
      This line doesn't directly connect to other files in the app, but it does use the cheerio library to parse the HTML response data from the axios request.
      */
          var $ = cheerio.load(response.data);
          var articles = [];

          /*
      This line tells the "cheerio" tool to find each part of the website that matches a certain pattern and do something with it.
      This line uses cheerio to select every HTML element with the class "fusion-post-large" and iterate over them, performing the specified function for each one.
      This line doesn't directly connect to other files, but 
      it does interact with the cheerio library to parse and manipulate the HTML response data from the axios request.
      */
          $("article.fusion-post-large").each((i, element) => {
            /*
        This line finds and saves the title text within the part of the website that "cheerio" is looking at.
        This line uses cheerio to find the child element with the class "entry-title" within the current element, 
        extract its text content, and assign it to the "title" variable.
        This line doesn't directly connect to other files, but 
        it does interact with the cheerio library to parse and manipulate the HTML response data from the axios request.
        */
            var title = $(element).find(".entry-title").text();

            /*
        	This line finds and saves the paragraph text within the part of the website that "cheerio" is looking at.
          This line uses cheerio to find the child "p" element within the current element, extract its text content, and assign it to the "paragraph" variable.
          This line doesn't directly connect to other files, but 
          it does interact with the cheerio library to parse and manipulate the HTML response data from the axios request.
        */
            var paragraph = $(element).find("p").text();

            /*
       	This line adds the title and paragraph information to a collection of articles.
        This line pushes an object containing the title and paragraph data into the "articles" array.
        This line doesn't directly connect to other files, but it uses data parsed from the HTML response data by cheerio. 
        The articles array is then sent back in the HTTP response to the client-side script or the server-side route that made the initial request.
        */
            articles.push({ title, paragraph, category });
          });

          // Compare the new website content with the existing data
          if (JSON.stringify(existingData) !== JSON.stringify(articles)) {
            // If the data differs, update the database
            await db.GardenTip.deleteMany({ category }); // Delete old data
            await db.GardenTip.insertMany(articles); // Insert new data
          }
          // Save the scraped data into the database

          /*
      This line sends the collection of articles back to whoever asked for them.
      This line sends a JSON response containing the "articles" array. 
      This method also automatically sets the Content-Type HTTP response header field to 'application/json' and 
      converts the response body to a JSON string representation.
      This line sends the response back to the route that invoked this controller method. 
      Typically, the response would then be sent back to a client-side script to be displayed in a web page or used in further client-side processing.
      */
          res.json({ articles });
        } catch (err) {
          res.status(422).json(err.message);
        }
      }
      /*
      This part handles any problems that happened while trying to get the articles.
      This is the error handling section of the try-catch block. 
      If any of the operations within the try block throw an exception, execution immediately transfers to the catch block, allowing for graceful error handling.
      This line doesn't directly connect to other files, but 
      it can use the error information from the axios request, cheerio parsing, or any other JavaScript errors that might occur within the try block.
      */
    } catch (err) {
      /*
      This line sends back an error message and a special code if there was a problem.
      This line sets the HTTP response status code to 422 and sends a JSON response containing the error message. 
      The 422 status code is typically used to indicate an unprocessable entity - the request was well-formed, but was unable to be followed due to semantic errors.
      This line sends the error response back to the route that invoked this controller method. 
      Typically, the response would then be sent back to a client-side script to handle the error, perhaps by displaying an error message to the user.
      */
      res.status(422).json(err.message);
    }
  },
};

/*
Please note that in this modification, I assumed that you have a model GardenTip in your db object. 
You'll need to create this model in your MongoDB database. 
Also, the GardenTip model should have title, paragraph, and category fields. 
This model is used to find existing data and to insert new data into the database.

Also, make sure to handle the situation when the website content changes and the category of tips no longer matches what's in the database. 
For example, you might add functionality to update the database periodically or whenever the website content changes.
*/
