//import express from 'express'
const conf = require('../config.json')
const Axios = require("axios")
var express = require('express');
const { query } = require('express');
const router = express.Router();


console.log(conf)


router.get('/', function (req, res, next) {
    console.log("get")
    if (req.query.nr) {
        res.render('home.html', { msg: req.query.nr })
    } else {
        res.render('home.html', {})
    }
    // console.log(req.params.id)
    // res.render('home.html', { title: 'Main page' })
    // res.sendFile(conf.viewdir + "home.html")
});

router.post('/', function (req, res, next) {
    console.log(req.body)
    if (req.body.nr && req.body.zip) {
        res.redirect(`/retoure/${req.body.nr}?ZIP=${req.body.zip}`)
        return
    }
    home_navAPImock(req, res)
})

const home_navAPImock = async (req, res) => {
    try {
        const resp = await Axios.get(`${conf.baseurl}/api/nav/${req.body.nr}`);
        console.log(resp.data);
        if (!resp.data.id) {
            res.render('home.html', { msg: `Paketnummer ${req.body.nr} nicht gefunden bitte erneut versuchen` })
        } else {
            res.render('home.html', { content: { ...resp.data } })
        }
    } catch (err) {
        // Handle Error Here
        console.error(err);
        res.render('home.html', { msg: err })
    }
}


module.exports = router;