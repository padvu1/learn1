const restify = require("restify");
const config = require("./config");
const responseStr = require("./response");

const server = restify.createServer();

function respond(req, res, next) {
  res.send(responseStr());
  next();
}

function close(req, res, next) {
  setTimeout(() => server.close(), 500);
  res.send("closing");
}

server.get("/", respond);
server.get("/close", close);

const port = config("port");
server.listen(port, function() {
  console.log("%s listening at %s", server.name, server.url);
});
