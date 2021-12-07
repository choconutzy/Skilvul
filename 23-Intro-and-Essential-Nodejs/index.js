const http = require('http')
const url = require('url')
const PORT = 8000

const server = http.createServer((req, res)=>{
    const requestUrl = url.parse(req.url, true)
    const path = requestUrl.path.slice(1,)
    if(path==='about' | path==='contact'){
        res.write(`Welcome to ${path} us page`)
    }else{
        res.write(`Hello world!`)
    }
    res.end()
})

server.on('listening', (...argv)=>{
    console.log(`server is listening on port ${PORT}`)
})

server.on('error', (err)=>{
    console.log("event is error")
    console.log(err)
})

server.on('close', ()=>{
    console.log('server is closed')
})

server.listen(PORT)