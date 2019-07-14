const router = require ('express').Router();
const dailyJournalController = require("../../controllers/dailyJournalsController");

// Matches with "/api/users"
router.route('/daily-jounal')
  .post(dailyJournalController.create);




  module.exports = router