const { describe, it, beforeEach } = require("node:test");
const assert = require("node:assert");

const { HTMX_REQUEST_HEADER } = require("../lib/constant");
const { isHTMX } = require("../lib/util");

describe("isHTMX", () => {
  const request = new Object();

  beforeEach(() => {
    request.headers = {};
  });

  it(`Should return true when headers contains ${HTMX_REQUEST_HEADER}`, () => {
    request.headers[HTMX_REQUEST_HEADER] = "true";
    assert.strictEqual(isHTMX(request), true);
  });

  it(`Should not return true when headers not contains ${HTMX_REQUEST_HEADER}`, () => {
    assert.strictEqual(isHTMX(request), false);
  });
});
