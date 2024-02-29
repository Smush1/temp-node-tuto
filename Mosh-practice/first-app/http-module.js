const http = require("http")

const server = http.createServer((req, res)=> {
    if(req == '/'){
        res.write('Hello World');
        res.end;
    }

    if(req == '/api/courses'){
        res.write(JSON.stringify([1,3,4,2,4,23]));
        res.end();
    }
});

/* server.on("connection", (socket)=>{
    console.log("New Connection")
}) */

server.listen(40000);

console.log("Listening to the port 40000")