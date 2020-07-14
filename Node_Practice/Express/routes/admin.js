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

function loginRequired(res,req,next) {
    
}

router.get('/', testMiddleware, testMiddleware2,(req,res) => { // admin/
    res.send('admin 이후 url');
});

router.get('/products', (req,res) => { // admin/products
    res.render('admin/products.html', { // nunjucks template 사용
        message : 'hello abcde <script>alert(1);</script>',
        online : 'express'
    });
});


module.exports = router;