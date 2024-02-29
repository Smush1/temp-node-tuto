const EventEmitter = require('events');
const emitter = new EventEmitter();


//Register a listener
emitter.on('message logged', (arg)=>{
    console.log('Listener Called', arg)
})


// Raise an event
emitter.emit('message logged', {id: 1 , url : "https://www.google.com"})

// emit means --> Making a noise, produce --  (signaling in current case)


emitter.on('logging', (arg)=>{
    console.log("Logged in Successfully", arg)
})


emitter.emit('logging', {id : 2 , url : "https://youtube.com"})
