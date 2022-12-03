const homepageHeader = require("../lib/component/homepageHeader");
const postList = require("../lib/component/postList");
const skeleton = require("../lib/component/skeleton");
const { generatePostList } = require("../lib/util");

exports.renderHomepage = (req, res) => {
  generatePostList((_, list) => {
    const content = `
      <main
        class="container"
      >
        ${homepageHeader()}
        ${postList(list)}
      </main>
    `;
    res.send(skeleton("Home", content));
  });
};
