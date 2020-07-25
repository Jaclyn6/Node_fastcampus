const express = require('express'); //express 설정
const admin = require('./routes/admin'); //routing 설정
const contacts = require('./routes/contacts'); //routing 설정
const logger = require('morgan'); // 로깅 설정
const nunjucks = require('nunjucks'); // template 설정
const bodyParser = require('body-parser'); //post 요청 받는 body parser - express 에 내장


const app = express();
const port = 3000;

nunjucks.configure('template', {
    autoescape : true, //html entity escape
    express : app // express() 객체 변수 명(여기서는 app)
})

//미들웨어 세팅
// Access log 설정
app.use(logger('dev'));

// Express 정적파일 세팅
app.use('/static', express.static('uploads'));  //첫번째 인자는 접근할 url 명, 두번째 인자는 정적파일 폴더명

//Global view 변수
app.use( (req,res,next) => { 
    app.locals.isLogin = true;
    next();
});

// 미들웨어 내 bodyparser 설정
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended : false }) );

//routing 설정
app.use('/admin', firstMiddleware,admin);  
app.use('/contacts', contacts);

app.get('/', (req, res) => {s
    res.send('Hello Express');
});

app.get('/fastcampus', (req, res) => {
    res.send('Hello Fastcampus11');
});

function firstMiddleware(req, res, next) {
    console.log("최우선 미들웨어");
    next();
}




app.listen(port, () => {
    console.log("Express Listening on port", port);
});