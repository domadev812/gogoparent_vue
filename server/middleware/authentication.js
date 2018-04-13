const datas = require("../utils/datas.js");

module.exports = function(options) {
  return function(req, res, next) {
    console.log("this is authentication middleware");
    var token = req.headers.token;
    console.log(req.headers)
    if(token) {
      if (token === datas.token) next()
      else res.status(401).json({status: false}); //if token is invalid
    } else { //no existing token header
      res.status(401).json({status: false});
    }
  }
}