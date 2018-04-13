var async = require('async');

const sender = require("../utils/sender.js");
const datas = require("../utils/datas.js");

exports.getToken = function (req, res) {  
  sender.sendSuccessResponse(res, {token: datas.access_token});  //TODO: Update later
};