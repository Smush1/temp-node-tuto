const EventEmitter = require('events');

const Logger = require('./new-logger');

const logger = new Logger();



logger.on('new-event', (arg)=>{
    console.log("New Event is working ", arg)
})

logger.log("This is working")