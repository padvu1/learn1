const mockNconf = {};
mockNconf.env = function() {
  return { argv: jest.fn() };
};
mockNconf.file = jest.fn();
mockNconf.formats = { yaml: null };

let _key = null;
let _value = null;
mockNconf.get = function(key) {
  _key = key;
  return _value;
};

jest.mock("nconf", () => {
  return mockNconf;
});

jest.mock("nconf-yaml", () => {
  return jest.fn();
});

const config = require("./config");

describe("config tests", () => {
  test("config returns value configured with nconf", () => {
    _value = "a";
    const v = config("k");

    expect(v).toEqual("a");
    expect(_key).toEqual("k");
  });
});
