const dotenv = require("dotenv")
dotenv.config()

const express = require("express")
const app = express()

const routes = require("./routes")
const openDBConnection = require("./db/db")


const port = process.env.PORT || 3000
const uri = process.env.MONGODB_URI

async function main() {
    try {
        // mastikan database connect, baru kita jalankan app.
        await openDBConnection(uri)


        app.use(express.json()) // biar kita bisa ambil request body.

        app.use(routes)

        app.listen(port, () => {
            console.log("server is listening on port", port)
        })
        
    } catch (error) {
        console.log("main:", error)
    }
}

main() // menjalankan main.