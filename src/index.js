const restify = require("restify");
const config = require("./config");
const responseStr = require("./response");

function respond(req, res, next) {
  res.send(responseStr());
  next();
}

const server = restify.createServer();
server.get("/", respond);

const port = config("port");
server.listen(port, function() {
  console.log("%s listening at %s", server.name, server.url);
});
