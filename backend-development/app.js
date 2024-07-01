const express = require('express')
const app = express()
const people = require('./routes/people')

const port = 5400

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', people)



app.listen(port,()=>{
    console.log(`Listening to the ${port}`)
} )