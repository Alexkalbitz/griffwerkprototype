const conf = require('../config.json')
var express = require('express');
const { default: axios } = require('axios');
const router = express.Router();


router.get('/:id', function (req, res, next) {

    // axios.get(`localhost:3000/api/nav/${id}`, response => {

    // })

    res.sendFile(conf.viewdir + "test.html")
});

module.exports = router;