const express = require('express')
const middlewares = require('./middlewares/middleware')

// import routes
const routes = require('./routes/routes')

const app = express()
const PORT = 3000

app.use(express.json())
app.use(middlewares.logger)

app.use('/hewan', routes)

app.listen(PORT, (req, res)=>{
    console.log(`Server is running on port ${PORT}`)
})