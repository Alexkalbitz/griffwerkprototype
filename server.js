
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
app.use('/api/nav', require("./routes/nav"))


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})