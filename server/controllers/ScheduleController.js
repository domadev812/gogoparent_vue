var async = require('async');

const sender = require("../utils/sender.js");
const datas = require("../utils/datas.js");

exports.getSchedule = function (req, res) {
  let schedule_id = req.params.schedule_id;
  if(schedule_id === undefined) {
      sender.sendFailureResponse(res, "Schedule ID Undefined");
      return;
  }
  sender.sendSuccessResponse(res, true, "Success", datas.Datas[schedule_id - 1]);  //TODO: Update later
};

exports.getSchedules = function (req, res) {  
  sender.sendSuccessResponse(res, true, "Success", datas.Datas);  //TODO: Update later
};