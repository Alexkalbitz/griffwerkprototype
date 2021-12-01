const conf = require('../config.json')
var express = require('express');
const router = express.Router();


router.get('/', function (req, res, next) {
    res.render('success.html')
});




module.exports = router;