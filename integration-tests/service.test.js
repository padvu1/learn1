const axios = require("axios");

// start the service
require("../src/index");

const delay = ms => new Promise(r => setTimeout(r, ms));

describe("integration tests", () => {
  test("hitting the root url returns the hello string", async () => {
    // wait for server to startup
    await delay(1000);

    const response = await axios({
      method: "GET",
      url: "http://localhost:10080"
    });

    expect(response.status).toEqual(200);
    expect(response.data).toEqual("hello I am built on trunk and with version 1.0.0");
  });

  afterAll(async () => {
    const response = await axios({
      method: "GET",
      url: "http://localhost:10080/close"
    });
  });
});
