const http = require('http')
const finalhandler = require('finalhandler')
const servestatic = require('serve-static')
const PORT = process.env.PORT || 8080 

const serve = servestatic('./public')

const server = http.createServer((req, res) => {
  let done = finalhandler(req, res)
  serve(req, res, done)
})

server.listen(PORT, function(){
    console.log(`Listening on port 8080`)
})
