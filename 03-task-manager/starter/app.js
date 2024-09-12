const express = require('express')
const app = express()

const tasks = require('./routes/tasks')

const connectDB = require('./db/connect')

const port = 3000

require('dotenv').config()


const notFound = require('./middleware/not-found')

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Listening to the ${port}`))
    }
    catch (error){
        console.log(error)
    }
}
//middleware
app.use(express.json())
app.use(express.static("./public"))

//routes


app.get('/hello', (req,res)=>{
    res.send("Task Manager App")
})



app.use('/api/v1/tasks', tasks)

app.use(notFound)

// app.get('/api/v1/tasks')          -  get all tasks
// app.put('/api/v1/tasks')          -  create a task
// app.get('/api/v1/tasks/:id')      -  get one task
// app.patch('/api/v1/tasks/:id')    -  update the task
// app.delete('/api/v1/tasks/:id')   -   delete a task



start()