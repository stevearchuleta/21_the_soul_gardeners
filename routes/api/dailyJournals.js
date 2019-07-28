const router = require ('express').Router();
const dailyJournalController = require("../../controllers/dailyJournalsController");



// router.route('/dailyjounalendpoint').post(function(req, res){
//   console.log('USER COMMENT: ', req.body);
//   res.send("IM WORKING! A-B-C");
// });


// Matches with "/api/users"
router.route('/dailyjounalendpoint')
  .post(dailyJournalController.create);




  module.exports = router