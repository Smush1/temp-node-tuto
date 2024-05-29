const http = require('http')

console.log(http)

const server = http.createServer((req, res) => {
  console.log('request event')
  res.end(http)
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})
