const connect = require('connect');
const serveStatic = require('serve-static');

const port = process.env.PORT || 8080;

connect().use(serveStatic(__dirname)).listen(port, () => {
  console.log(`go to: http://127.0.0.1:${port}`); // eslint-disable-line no-console
});
