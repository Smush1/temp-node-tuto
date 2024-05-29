const EventEmitter = require('events');

const customEmitter = new EventEmitter;


customEmitter.on("response", (name, id)=>{
  console.log(`${name} has recieved the data who have id : ${id} `)
})
customEmitter.on("response", ()=>{
  console.log("some Data recieved")
})

customEmitter.emit("response", "sumesh", 30)