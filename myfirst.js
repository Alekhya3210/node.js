var http = require('http');
http.createServer(fucntion (req, res){
res.writeHead(200, {'content-type':'text/html'});
res.end('Hello World!');
}).listen(8080);