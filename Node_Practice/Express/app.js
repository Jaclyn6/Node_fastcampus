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
app.use( (req,res,next) => {  // 경로 지정을 안해놓읗면 어떤 url을 타든 이 미들웨어를 거치도록 함
    app.locals.isLogin = true; //사용하는 이유 : 템플릿 어디서든 isLogin 값에 접근 할 수 있음 (예시는 base.html 참고)
    next();
});

// 미들웨어 내 bodyparser 설정
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended : false }) );

//routing 설정
app.use('/admin', firstMiddleware,admin);  
app.use('/contacts', contacts);

app.get('/', (req, res) => {
    res.send('Hello Express');
});

app.get('/fastcampus', (req, res) => {
    res.send('Hello Fastcampus11');
});

function firstMiddleware(req, res, next) {
    console.log("최우선 미들웨어");
    next();
}

// 404 에러 미들웨어 설정, 일반적으로 에러 처리는 미들웨어 중 마지막에 설정해줌
app.use( (req,res, _) => { //사용하지 않는 변수는 _로 처리해줌(여기서는 next) =약속 
    res.status(400).render('common/404.html'); //res status가 400번대 일 경우 404.html 출력
});

// 500 에러 미들웨어 설정, 일반적으로 에러 처리는 미들웨어 중 마지막에 설정해줌
app.use( (req,res, _) => { //사용하지 않는 변수는 _로 처리해줌(여기서는 next) =약속 
    res.status(500).render('common/500.html'); //res status가 400번대 일 경우 404.html 출력
});

app.listen(port, () => {
    console.log("Express Listening on port", port);
});