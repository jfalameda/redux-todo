var connect = require('connect');
var serveStatic = require('serve-static');
console.log('Starting HTTP server')
connect().use(serveStatic('static')).listen(8080);
console.log('Serving files at http://localhost:8080');
