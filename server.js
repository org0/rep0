var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type':'text/html'});
	fs.readFile('index.html', function(err, contents){
		console.log(err);
		res.end(contents);
	});
});

server.listen(8000);
localhost:8000/console.log('Server started');