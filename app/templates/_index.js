var http = require('http');
var connect = require('connect');
var liveReload = require('connect-livereload');
var fs = require('fs');

var port = process.env.PORT || 9000;

var app = connect()
  .use(connect.logger('dev'))
  .use(liveReload({ port: 35729 }))
  .use(connect.static('public'))
  .use(connect.directory('public'));

http.createServer(app).listen(port, function () {
  console.log('Server listening on port ' + port);
});

