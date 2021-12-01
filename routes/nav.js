const conf = require('../config.json')
var express = require('express')
const router = express.Router();

const ticket = {
    "1": {
        "id": "IEAE5A62KQX4UT4X",
        "accountId": "IEAE5A62",
        "title": "How-To Guide: Personal Space",
        "status": "Active",
        "importance": "Normal",
        "createdDate": "2021-11-29T19:09:03Z",
        "updatedDate": "2021-11-29T19:09:04Z",
        "dates": {
            "type": "Backlog"
        },
        "scope": "WsTask",
        "customStatusId": "IEAE5A62JMAAAAAA",
        "permalink": "https://app-us2.wrike.com/open.htm?id=801787799",
        "priority": "00ca98008000000000000800"
    },
}

router.get('/:id', function (req, res, next) {

    res.json(ticket[req.params.id])
});

module.exports = router;