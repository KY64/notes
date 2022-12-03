const path = require("node:path");
const assert = require("node:assert");
const { describe, it } = require("node:test");

const { TEST_FILE_DIRECTORY } = require("./constant");
const { parseDocument } = require("../lib/util");
const { HTTP_OK, HTTP_NOT_FOUND, ERROR_NOT_FOUND } = require("../lib/constant");

describe("parseDocument", () => {
  const TEST_FILE = path.join(TEST_FILE_DIRECTORY, "document.adoc");
  it("Should parse asciidoc document", () => {
    const [status, doc] = parseDocument(TEST_FILE);
    assert.strictEqual(doc.title, "Test Title");
    assert.strictEqual(doc.attributes["attributes1"], "value1");
    assert.strictEqual(doc.attributes["attributes2"], "value2");
    assert.equal(
      doc.content,
      `<div class="sect1">
<h2 id="_test_subtitle">Test Subtitle</h2>
<div class="sectionbody">
<div class="paragraph">
<p>This is the content</p>
</div>
</div>
</div>`
    );

    assert.strictEqual(status, HTTP_OK);
  });

  it("Should return error if document not exist", () => {
    const [status, doc] = parseDocument(path.join("nonexist-file"));
    assert.deepStrictEqual(doc, ERROR_NOT_FOUND);
    assert.strictEqual(status, HTTP_NOT_FOUND);
  });

  it("Should return error if document is not asciidoc format", () => {
    const [status, doc] = parseDocument(path.join("non_adoc_file"));
    assert.deepStrictEqual(doc, ERROR_NOT_FOUND);
    assert.strictEqual(status, HTTP_NOT_FOUND);
  });
});
