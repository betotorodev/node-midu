const http = require('node:http')
const { findAFreePort } = require('./free-port')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('hola mundo')
})

findAFreePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`server listen on port http://localhost:${port}`)
  })
})
