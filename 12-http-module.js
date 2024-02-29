const http = require('http')

const server = http.createServer((req,res)=>{
      if(req.url == '/'){
        res.write('Welcome to our Homepage')
        res.end() 
      }  
      if(req.url =='/about'){
        res.write('You are on a About page now')
        res.end()
      }
})

server.listen(5000)