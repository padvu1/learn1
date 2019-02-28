const configMap = new Map();
configMap.set("build:branch", "tr");
configMap.set("build:version", "0.0.0");

const mockConfig = function(key) {
  return configMap.get(key);
};

jest.mock("./config", () => {
  return mockConfig;
});

const response = require("./response");

describe("response tests", () => {
  test("response returns branch and version", () => {
    expect(response()).toEqual("hello I am built on tr and with version 0.0.0");
  });
});
