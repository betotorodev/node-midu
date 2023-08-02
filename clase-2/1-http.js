const http = require('node:http')
const { findAFreePort } = require('../clase-1/free-port')

const desiredPort = process.env.POR ?? 3000

const processRequest = (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('hola mundo, bienvenidos a mi página')
  }
}

const server = http.createServer(processRequest)

findAFreePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`server listen on port http://localhost:${port}`)
  })
})
