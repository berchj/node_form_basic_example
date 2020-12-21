const express = require('express')
const router = require('./routes/router')
const app = express()
const port = 4900
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + '/views'))
app.set('view engine','ejs')
app.use('/api',router)
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})