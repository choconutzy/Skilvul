const express = require("express")
const CourseController = require('../controllers/courses.controller')
const router = express.Router()

router.post("/", CourseController.createNewCourse)
router.get("/", CourseController.getAllCourse)
router.get("/:id", CourseController.getCourseByID)
router.get("/:name", CourseController.getCourseByTitle)
router.patch("/:id", CourseController.updateCourse)
router.delete("/:id", CourseController.deleteCourse)

module.exports = router