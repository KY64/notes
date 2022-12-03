const githubIcon = require("./githubIcon");
const linkedinIcon = require("./linkedinIcon");

module.exports = () => {
  const svgSize = 24;

  return `
    <hgroup>
      <h1>Hi, I'm Excel</h1>
      <h2>
        Software Engineer specialized in building REST API, writing automation
        script and doing simple ETL on textual data. <br />
        <small>
          <a href="https://github.com/ky64" target="_blank"> ${githubIcon(
    svgSize,
    svgSize
  )} </a>
          &nbsp;
          <a href="https://www.linkedin.com/in/excel-d-515b391a5/" target="_blank"> ${linkedinIcon(
    svgSize,
    svgSize
  )} </a>
        </small>
      </h2>
    </hgroup>
`;
};
