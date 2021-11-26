
const express = require('express')
const app = express()
const port = 3000

var fs = require('fs');
fs.readFile(__dirname + '/link.json', function (err, data) {
    if (err) {
        throw err;
    }
    var newArr = JSON.parse(data)
    console.log(data.toString());
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/test/:id", (req, res) => {
    console.log(req.params.id)

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})