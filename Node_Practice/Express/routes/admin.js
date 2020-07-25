const express = require('express');
const router = express.Router();

function testMiddleware(req,res,next) {
    console.log('첫번째 미들웨어');
    next();
}

function testMiddleware2(req,res,next) {
    console.log('두번째 미들웨어');
    next();
}

// function loginRequired(res,req,next) { //미들웨어 예시
    
// }

router.get('/', testMiddleware, testMiddleware2,(req,res) => { // admin/
    res.send('admin 이후 url');
});

router.get('/products', (req,res) => { // admin/products
    res.render('admin/products.html', { // nunjucks template 사용
        message : 'hello abcde <script>alert(1);</script>',
        online : 'express'
    });
});

router.get('/products/write', (req,res) => {
    res.render('admin/write.html');
});

router.post('/products/write', (req,res) => { //bodyparser를 통해 post 요청을 처리할 수 있음
    res.send(req.body); //bodyparser를 써야 함
});


module.exports = router;