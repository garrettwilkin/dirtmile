/*
 * DirtMile - A Telephony app to bridge the digital divide.
 *
 *
 */

var flatiron = require('flatiron'),
  app = flatiron.app,
  util = require('util');

app.use(flatiron.plugins.http);

// GET / 
app.router.get('/', function () {
  this.res.writeHead(200, { 'Content-Type': 'text/plain' });
  this.res.end('Hello world\n');
});

// POST to / 
app.router.post('/', function () {
  this.res.writeHead(200, { 'Content-Type': 'text/plain' });
  this.res.write('Nice data!');
  this.res.end(util.inspect(this.req.body, true, 2, true) + '\n');
});

// Parameterized routes

app.router.get('/sandwich/:type', function (type) {
  console.log(type);
  if (~['bacon', 'burger'].indexOf(type)) {
    this.res.writeHead(200, { 'Content-type': 'text/plain' });
    this.res('Serving ' + type + 'sandwich!\n');
  } else {
    this.res.writeHead(404, { 'Content-Type': 'text/plain' });
    this.res.end('No such sandwich, sorry!\n');
  }
});

app.start(8080);
