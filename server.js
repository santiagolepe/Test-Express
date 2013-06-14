
var http = require("http");

http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type': 'text/plan'});
	res.end("Hello Word");
}).listen(3001, '127.0.0.1');
console.log("servidor corriendo en el puerto 3001");