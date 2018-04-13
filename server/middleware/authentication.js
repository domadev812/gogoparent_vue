const datas = require("../utils/datas.js");

module.exports = function(options) {
  return function(req, res, next) {
    var access_token = req.headers.access_token;
    if(access_token) {
      if (access_token === datas.access_token) next()  //TODO: Check Token, Update later
      else res.status(401).json({status: false}); //if token is invalid
    } else { //no existing token header
      res.status(402).json({status: false});
    }
  }
}