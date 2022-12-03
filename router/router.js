const { HTTP_NOT_FOUND, URL_FILE_PATH } = require("../lib/constant");
const { renderPost } = require("../controller/renderPost");
const { renderHomepage } = require("../controller/renderHomepage");

const router = (app) => {
  app.get("/", (req, res) => {
    renderHomepage(req, res);
  });

  app.get("/post/:post", (req, res) => {
    if (new RegExp(URL_FILE_PATH).test(req.params["post"])) {
      renderPost(req, res);
      return;
    }
    res.sendStatus(HTTP_NOT_FOUND);
  });
};

module.exports = { router };
