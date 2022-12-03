module.exports = (title, body) => `
<!DOCTYPE html>
<html>
  <head>
    <title>${title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="/static/css/pico.min.css" />
  </head>
  <body>
    <nav class="container-fluid">
    </nav>
    ${body}
  </body>
  <script>
    document.querySelector("nav.container-fluid").innerHTML = \`
      <ul>
      </ul>
      <ul>
        <li>
          <a class="secondary" data-theme-switcher="auto"></a>
        </li>
      </ul>
   \`
  </script>
  <script src="/static/js/htmx.min.js"></script>
  <script src="/static/js/theme-switcher.min.js"></script>
</html>
`;
