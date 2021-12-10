const express = require('express')

const dotenv = require('dotenv')
dotenv.config()

const app = express()
const routes = require('./routes/index')

const PORT = process.env.PORT || 3000

app.use(routes)


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})