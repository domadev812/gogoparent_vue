exports.sendSuccessResponse = function(res, success, message, data) {
  var result = {
    success: success,
    message: message,
    code: 200,
    data: data
  };
  res.send(result);
}

exports.sendFailureResponse = function(res, message, data) {
  var result = {
    message: message,
    success: false,
    errors: data
  };
  res.status(500).json(result);
}