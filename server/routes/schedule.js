var express = require('express');
var router = express.Router();

var ScheduleController = require('../controllers/ScheduleController');
// get all schedules
router.get('/', function (req, res) {
  ScheduleController.getSchedules(req, res);
});

// get schedule by id
router.get('/:schedule_id', function (req, res) {
  ScheduleController.getSchedule(req, res);
});
module.exports = router;