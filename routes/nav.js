const conf = require('../config.json')
var express = require('express')
const router = express.Router();

const nav = [{
    "id": "1234",
    "package_nr": "1234",
    "status": "Active",
    "importance": "Normal",
    "sent": "10-11-2021",
    "receiver": "BAHAG",
    "ZIP": "80333",
    "items": [
        {
            "id": "8255",
            "desc": "handle gray",
            "amount": 5,
            "price": 9.99
        },
        {
            "id": "8555",
            "desc": "handle blue",
            "amount": 1,
            "price": 9.99,
        },
        {
            "id": "4222",
            "desc": "clipper gray",
            "amount": 2,
            "price": 4.99,
        },
    ],
},
{
    "id": "1111",
    "package_nr": "1111",
    "status": "Active",
    "importance": "Normal",
    "sent": "10-11-2021",
    "receiver": "BAHAG",
    "ZIP": "80333",
    "items": [
        {
            "id": "5222",
            "desc": "doorknob gray",
            "amount": 5,
            "price": 7.99
        },
        {
            "id": "1558",
            "desc": "handle dark",
            "amount": 1,
            "price": 9.99,
        },
    ]
}]


router.get('/:id', function (req, res, next) {
    for (record of nav) {
        if (record.id === req.params.id) {
            res.json(record)
            return
        }
    }
    res.json({})
});

module.exports = router;