const { parseDate } = require("../util");

module.exports = (postList) => {
  let content = "";
  for (const post of postList) {
    content += `
    <hgroup>
      <h5>
        <small>
          <a class="secondary" href="/post/${post.slug}">${post.title}</a>
        </small>
      </h5>
      <h6>${post.description} <br />
        <small>
          <span align="right"><small> ${parseDate(
    post.create_date
  )} </small></span>
        </small>
      </h6>
    </hgroup>
    `;
  }
  return content;
};
