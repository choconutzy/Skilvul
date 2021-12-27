const express = require("express")

const instructorRoutes = require("./instructor")
const courseRoutes = require("./courses")
const participantRoutes = require("./participants")

// creates a new router instance.
const router = express.Router()

router.get("/ping", (req, res) => {
    const ready = {
        status: "server is ready"
    }

    res.status(200).send(ready)
})

router.use("/instructors", instructorRoutes)
router.use("/courses", courseRoutes)
router.use("/participants", participantRoutes)

module.exports = router