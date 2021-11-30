
const express = require('express')
let nunjucks = require('nunjucks')

//settings
const app = express()
const port = 3000
app.set("view engine", "html")

nunjucks.configure(['views/'], {
    autoescape: false,
    express: app
})


//routes
//const homeRoute = require('./routes/home')
app.use('/', require('./routes/home'))
app.use('/test', require('./routes/test'))
// var fs = require('fs');
// fs.readFile(__dirname + '/link.json', function (err, data) {
//     if (err) {
//         throw err;
//     }
//     var newArr = JSON.parse(data)
//     console.log(data.toString());
// });

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.get("/test/:id", (req, res) => {

//     if (req.params.id === "1234") {
//         app.send
//     } else {
//         app.send("fail")
//     }

// })
// app.get

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})