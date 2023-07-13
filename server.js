const express = require('express')
const bodyparser = require('body-parser')
const postRoutes = require("./router/routes")
const mongoose =require('mongoose')
const app = express()
app.use('/display', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})


app.use(bodyparser.json());
app.use('/api', postRoutes);

app.get('/', (req, res) => {
    res.json({
        message:"running"
    })
})
mongoose.connect("mongodb+srv://user:user@restapi.fptkcqu.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("Database is connected and live...")
})

app.listen(process.env.PORT || 3000)
