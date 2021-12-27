const express = require("express")
const CourseController = require('../controllers/participants.controller')
const router = express.Router()

router.post("/", CourseController.createNewParticipant)
router.get("/", CourseController.getAllParticipant)
router.get("/:id", CourseController.getParticipantByID)
router.get("/:name", CourseController.getParticipantByName)
router.patch("/:id", CourseController.updateParticipant)
router.delete("/:id", CourseController.deleteParticipant)

module.exports = router