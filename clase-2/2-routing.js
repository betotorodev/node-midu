const http = require('node:http')

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/lunes':
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end('<h1> se entrena pierna </h1>')
          break
        default:
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end('<h1> no se entrena </h1>')
          break
      }
      break

    default:
      break
  }
}

const server = http.createServer(processRequest)

server.listen(3001, () => {
  console.log('server listen on port http://localhost:3001')
})
