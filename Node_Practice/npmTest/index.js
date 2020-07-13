// 웹 서버 없이 node js 사용하기

var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('Hello Nodejs1122');
    response.end();
}).listen(3000);