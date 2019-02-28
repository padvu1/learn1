const config = require("./config");

function responseStr() {
  return "hello I am built on " + config("build:branch") + " and with version " + config("build:version");
}

module.exports = responseStr;
