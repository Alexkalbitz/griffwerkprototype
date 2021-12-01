const conf = require('../config.json')
var express = require('express');
const { default: axios } = require('axios');
const router = express.Router();


router.get('/:id?', function (req, res, next) {
    console.log(req.params.id)
    res.sendFile(conf.viewdir + "test.html")
});

router.post('')

module.exports = router;