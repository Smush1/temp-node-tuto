const express = require('express')
const app = express()

const tasks = require('./routes/tasks')


const port = 3000

//middleware
app.use(express.json())

//routes
app.get('/hello', (req,res)=>{
    res.send("Task Manager App")
})


app.use('/api/v1/tasks', tasks)

// app.get('/api/v1/tasks')          -  get all tasks
// app.put('/api/v1/tasks')          -  create a task
// app.get('/api/v1/tasks/:id')      -  get one task
// app.patch('/api/v1/tasks/:id')    -  update the task
// app.delete('/api/v1/tasks/:id')   -   delete a task

app.listen(port, console.log(`Listening to the ${port}`))