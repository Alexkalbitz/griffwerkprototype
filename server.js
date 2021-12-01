
const express = require('express')
const conf = require('./config.json')
let nunjucks = require('nunjucks')

//settings
const app = express()
const port = 3000

//POST json and http POST
app.use(express.json())
app.use(express.urlencoded())

//template engine
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
app.use('/retoure', require("./routes/retoure"))
app.use('/success', require("./routes/success"))

app.listen(port, () => {
    console.log(`Example app listening at ${conf.baseurl}`)
})