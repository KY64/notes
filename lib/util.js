const path = require("path");
const fs = require("fs");

const asciidoc = require("asciidoctor")();
const sqlite3 = require("sqlite3").verbose();

const {
  ASCIIDOC_FORMAT,
  DATABASE,
  HTMX_REQUEST_HEADER,
  HTTP_NOT_FOUND,
  ERROR_NOT_FOUND,
  HTTP_OK,
} = require("./constant");

exports.isHTMX = (req) => {
  return req.headers[HTMX_REQUEST_HEADER] === "true";
};

exports.generatePostList = (callback) => {
  const db = this.connectSQlite(DATABASE);
  db.all(
    `SELECT slug, title, description, create_date 
          FROM post
          ORDER BY create_date
          DESC`,
    (_, row) => {
      callback(null, row);
    }
  );
};

exports.parseDate = (date) =>
  new Date(date).toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

exports.parseDocument = (filename) => {
  if (
    fs.existsSync(filename) &&
    path.extname(filename) === ASCIIDOC_FORMAT &&
    fs.statSync(filename).isFile()
  ) {
    const doc = asciidoc.loadFile(filename, { safe: "server" });
    return [
      HTTP_OK,
      new Object({
        title: doc.getDocumentTitle(),
        attributes: doc.getAttributes(),
        content: doc.convert({ to_file: false, safe: "server" }),
        doc: doc,
      }),
    ];
  }
  return [HTTP_NOT_FOUND, new Object(ERROR_NOT_FOUND)];
};

exports.connectSQlite = (database) => {
  return new sqlite3.cached.Database(database);
};
