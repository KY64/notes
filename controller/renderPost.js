const path = require("path");

const {
  ASCIIDOC_FORMAT,
  HOSTNAME,
  HTTP_OK,
  POST_DIR,
} = require("../lib/constant");
const { parseDocument, parseDate } = require("../lib/util");
const skeleton = require("../lib/component/skeleton");

exports.renderPost = (req, res) => {
  const filename = req.params["post"] + ASCIIDOC_FORMAT;
  const [status, doc] = parseDocument(path.join(POST_DIR, filename));
  if (status !== HTTP_OK) {
    res.sendStatus(status);
    return;
  }

  const content = `
    <main class="container" >
      <hgroup>
        <h1><small> ${doc.title} </small></h1>
        <h2> ${doc.attributes["tagline"]} <br/>
          <small> 
            <em>
              ${parseDate(doc.attributes["create_date"])} 
              on <a href="/">${HOSTNAME}</a>
            </em>
          </small>
        </h2>
      </hgroup>
      ${doc.content}
      <div align="center">
        <a href="/"> Back to Home </a>
      </div>
    </main>
  `;
  res.send(skeleton(doc.title, content));
};
