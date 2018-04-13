var express = require('express');
var router = express.Router();
var authentication = require('../middleware/authentication.js');

var ScheduleController = require('../controllers/ScheduleController');
// get all schedules
router.get('/', authentication(), function (req, res) {
  ScheduleController.getSchedules(req, res);
});

// get schedule by id
router.get('/:schedule_id', function (req, res) {
  ScheduleController.getSchedule(req, res);
});

//update schedule
router.patch('/:schedule_id', function (req, res, next) {
  ScheduleController.updateSchedule(req, res, next);
});
module.exports = router;