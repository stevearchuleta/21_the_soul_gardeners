const router = require ('express').Router();
const dailyJournalController = require("../../controllers/dailyJournalsController");


router.post('/daily-jounal', function(req, res){
  console.log('USER COMMENT: ', req.body);
  res.send("IM WORKING!");
});


// Matches with "/api/users"
router.route('/daily-jounal')
  .post(dailyJournalController.create);




  module.exports = router