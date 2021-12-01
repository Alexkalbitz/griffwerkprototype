//import express from 'express'
const conf = require('../config.json')
var express = require('express')
const router = express.Router();


console.log(conf)


router.get('/', function (req, res, next) {
    res.render('foo.html', { title: 'Main page' })
    //res.sendFile(conf.viewdir + "home.html")
});

module.exports = router;