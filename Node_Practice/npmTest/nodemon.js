/*
nodemon을 사용하면 소스를 수정할 때마다 웹서버를 재기동 시켜서 반영해줌
윈도우에서는 ps1 오류가 나므로 powershell Set-ExecutionPolicy RemoteSigned 명령어 실행해서 권한 줘야 함
usage : nodemon nodemon.js
*/

var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('Hello Nodejs1122');
    response.end();
}).listen(3000);