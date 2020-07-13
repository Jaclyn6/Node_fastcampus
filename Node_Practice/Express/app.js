const express = require('express');
const admin = require('./routes/admin'); //routing 설정
const contacts = require('./routes/contacts');

const nunjucks = require('nunjucks'); // template 설정


const app = express();
const port = 3000;

nunjucks.configure('template', {
    autoescape : true, //html entity escape
    express : app // express() 객체 변수 명(여기서는 app)
})

app.get('/', (req, res) => {
    res.send('Hello Express');
});

app.get('/fastcampus', (req, res) => {
    res.send('Hello Fastcampus11');
});

app.use('/admin', admin);  // routing 설정

app.use('/contacts', contacts);

app.listen(port, () => {
    console.log("Express Listening on port", port);
});