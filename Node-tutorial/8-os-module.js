const os = require('os')


// info aboout the current user

const user = os.userInfo()
console.log(user)

//other method to user and return the system uptime in seconds

console.log(`The System Uptime is : ${os.uptime()} seconds`)

const currentOS = {
    name :os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}

console.log(currentOS)