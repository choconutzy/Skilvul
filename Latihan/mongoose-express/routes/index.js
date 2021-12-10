const express = require('express')
const app = express()
const router = express.Router()
const artisRoutes = require('./artis')
router.get("/ping", (req, res)=>{
    const ready = {
        status : "server is ready"
    }
    res.status(200).send(ready)
})

app.use('/artis', artisRoutes)

module.exports = router