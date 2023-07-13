const express = require('express')
const bodyparser = require('body-parser')
const mongoose =require('mongoose')
const app = express()
app.use('/display', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)
