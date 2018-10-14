const connect = require('connect');
const serveStatic = require('serve-static');

const PORT = 5000;

connect().use(serveStatic(__dirname)).listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
