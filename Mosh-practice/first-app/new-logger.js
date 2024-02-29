const EventEmitter = require('events');
const emitter = new EventEmitter();


class Logger extends EventEmitter{
    log(message){
        console.log(message); 

        this.emit('new-event', {id : 212, url :"something new"})
    }
    
   

}




module.exports = Logger
