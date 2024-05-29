const http = require('http');
const fs = require('fs');

 http.createServer((req, res) => {
  //   const text = fs.readFileSync('./content/big.txt')
  // res.end (text)

  const fileStream = fs.createReadStream('./content/big.txt', 'utf-8' )
  fileStream.on('open', ()=> {
    fileStream.pipe(res)
  })

  fileStream.on('error', (err) => {console.log(error)
  res.end(err)
})
})
.listen(5001, ()=> console.log("Listening to the 5000"))