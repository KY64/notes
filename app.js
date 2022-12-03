const express = require("express");
const compression = require("compression");
const app = express();
const { router } = require("./router/router");
const { DEFAULT_PORT } = require("./lib/constant");
const PORT = process.env.PORT || DEFAULT_PORT;

app.use(compression());
app.use("/static", express.static("static"));

router(app);
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log("Listenting to", PORT));
