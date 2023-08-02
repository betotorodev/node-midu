const express = require('express')

const app = express()
app.disable('x-powered-by')

const PORT = 3001

app.use((req, res, next) => {
  console.log('first middelware')

  next()
})

app.get('/', (req, res) => {
  res.status(200).send('<h1> hola mundo desde express <h1/>')
})

app.use((req, res) => {
  res.status(404).send('<h1> 404 <h1/>')
})

app.listen(PORT, () => {
  console.log('server listen on port http://localhost:3001')
})
