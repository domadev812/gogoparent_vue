exports.sendSuccessResponse = function(res, data) {
  res.send(data);
}

exports.sendFailureResponse = function(res, data) {
  res.status(500).json(data);
}