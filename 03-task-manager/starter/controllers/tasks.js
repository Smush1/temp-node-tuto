const getAllTasks = (req,res) => {
    res.send("all items")
}
const createTask = (req,res) => {
    res.json(req.body)
    console.log(req.body)
}
const getTask = (req,res) => {
    res.json(req.params.id)
    console.log(req.params.id)
}
const updateTask = (req,res) => {
    res.send("update Task")
}
const deleteTask = (req,res) => {
    res.send("Delete Task")
}

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask }