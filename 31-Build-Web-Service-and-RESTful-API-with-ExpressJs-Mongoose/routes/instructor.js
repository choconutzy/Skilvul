const express = require("express")
const InstructorController = require('../controllers/instructor.controller')
const router = express.Router()

router.post("/", InstructorController.createNewInstructor)
router.get("/", InstructorController.getAllInstructor)
router.get("/:id", InstructorController.getInstructorByID)
router.get("/:name", InstructorController.getInstructorByName)
router.patch("/:id", InstructorController.updateInstructor)
router.delete("/:id", InstructorController.deleteInstructor)

module.exports = router