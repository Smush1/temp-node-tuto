const { default: mongoose } = require('mongoose')
const moongose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
            type: String,
            required : [true, "Please provide name"],
            trim: true , 
            maxlength: [ 20, "Character should be less than or equal to 20"]
        },
    completed: {
        type: Boolean,
        default: false
        }
})


module.exports = mongoose.model('Task', TaskSchema )