import jsonServer from 'json-server'

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.post('/login', (req, res) => {
  res.jsonp({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' })
})

server.post('/logout', (req, res) => {
  res.sendStatus(200)
})

server.post('/forgot-password', (req, res) => {
  res.sendStatus(200)
})

server.post('/recover-password', (req, res) => {
  res.sendStatus(200)
})

server.use(jsonServer.bodyParser)

server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running on port 3000')
})
