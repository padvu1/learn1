const nconf = require("nconf");
nconf.formats.yaml = require("nconf-yaml");

nconf.env().argv();

nconf.file("build", {
  file: "config/build.yaml",
  format: nconf.formats.yaml
});

nconf.file("learn1", {
  file: "config/learn1.yaml",
  format: nconf.formats.yaml
});

function get(key) {
  return nconf.get(key);
}

module.exports = get;
