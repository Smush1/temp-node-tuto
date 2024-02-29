//Globals  - No window

//__dirname - path to current directory
//__filename - file name
// require   - function to use modules (CommmonJS)
// module    - info about current module (file)
// process    - info about env where the program is being executed


console.log(module);
setInterval(()=>{
console.log("Hello World")
}, 1000)

setTimeout(() => {
    console.log("THIS IS another World")
    
}, 3000);