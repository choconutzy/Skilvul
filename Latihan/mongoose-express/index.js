const express = require('express')

const dotenv = require('dotenv')
dotenv.config()

const routes = require('./routes/index')
const db = require('./helpers/db')

const PORT = process.env.PORT || 3000

// const url = "mongodb+srv://aprilia:<password>@cluster0.jqiut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const uri = process.env.MONGO_URI

// const dbOptions = {}


async function main(){
    await db(uri)
    
    const app = express()

    app.use(express.json()) // biar bisa ambil req body

    app.use(routes)
    
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`)
    })
}

main()