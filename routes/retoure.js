const conf = require('../config.json')
var express = require('express');
const Axios = require('axios');
const router = express.Router();


router.get('/:id?', function (req, res, next) {
    retoure_navAPImock(req, res, req.query.zip, req.params.id)
});


router.post('/', function (req, res, next) {
    res.redirect("/success")
});

const retoure_navAPImock = async (req, res, zip, id) => {
    try {
        const resp = await Axios.get(`${conf.baseurl}/api/nav/${id}`);
        console.log(resp.data);
        res.render('retoure.html', { content: { ...resp.data } })

    } catch (err) {
        // Handle Error Here
        console.error(err);
        res.render('home.html', { msg: err })
    }
}


module.exports = router;