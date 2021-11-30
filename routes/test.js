const conf = require('../config.json')
var express = require('express')
const router = express.Router();


router.get('/:id', function (req, res, next) {
    console.log(req.id)
    console.log(req.query)
    res.sendFile(conf.viewdir + "test.html")
});

module.exports = router;