const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('연락처 개요');
});


router.get('/list', (req, res) => {
    res.send('연락처 정보');
});

module.exports = router;
