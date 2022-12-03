const path = require("node:path");

const ROOT_DIR = path.join(__dirname, "..");

module.exports = {
  HOSTNAME: "kymind",
  ASCIIDOC_FORMAT: ".adoc",
  DATABASE: path.join(ROOT_DIR, "db.sqlite"),
  HTML_FORMAT: ".html",
  HTMX_CURRENT_URL: "hx-current-url",
  HTMX_REQUEST_HEADER: "hx-request",
  DEFAULT_PORT: 3000,
  URL_FILE_PATH: /^[a-z0-9\-_]+$/,

  HTTP_NOT_FOUND: 404,
  HTTP_BAD_REQUEST: 400,
  HTTP_OK: 200,

  ROOT_DIR: ROOT_DIR,
  VIEW_DIR: path.join(ROOT_DIR, "views"),
  VIEW_MODULE_DIR: path.join(ROOT_DIR, "views", "module"),
  POST_DIR: path.join(ROOT_DIR, "posts"),

  ERROR_NOT_FOUND: { error: "not found" },
};
