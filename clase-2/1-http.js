const http = require('node:http')
const fs = require('node:fs')
const { findAFreePort } = require('../clase-1/free-port')

const desiredPort = process.env.POR ?? 3000

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  if (req.url === '/') {
    res.statusCode = 200
    res.end('hola mundo, bienvenidos a mi página')
  } else if (req.url === '/imagen') {
    fs.readFile('./clase-2/lampara.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('Internal server error')
        console.log(err)
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200
    res.end('Contacto')
  } else {
    res.statusCode = 404
    res.end('Not found')
  }
}

const server = http.createServer(processRequest)

findAFreePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`server listen on port http://localhost:${port}`)
  })
})
