var http = require('http');
var server =http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
    })
server.listen(8080,"localHost",function(){
    console.log('Server is running at http://localhost:8080/');
    }
);
