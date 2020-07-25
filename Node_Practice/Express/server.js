//서버 실행부분을 server.js 로 분리
// pacakge.json에도 구동을 npm run server.js로 변경해줘야 함
const app = require('./app');
const port = 3000;

app.listen( port, () => {
    console.log('Express listening on port ', port);
});