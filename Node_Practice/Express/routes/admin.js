const express = require('express');
const router = express.Router();

router.get('/', (req,res) => { // admin/
    res.send('admin 이후 url');
});

router.get('/products', (req,res) => { // admin/products
    res.render('admin/products.html', { // nunjucks template 사용
        message : 'hello',
        online : 'express'
    });
});


module.exports = router;