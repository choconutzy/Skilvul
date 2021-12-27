const CourseModel = require("../models/courses")

class CourseController {
    static async createNewCourse(req, res) {
        // get `name` from req body.
        // create a new course object.
        // save to db.
        try {
            const { title, description, instructors, scheduleDateTime } = req.body
            const course = new CourseModel({title: title, description: description, instructor: instructors, scheduleDateTime: scheduleDateTime})
        
            const saved = await course.save()
            res.status(201).send(saved);
        } catch (error) {
            res.status(500).send({err: error})
        }

    }

    static async getAllCourse(req, res) {
        try {
            const courseList = await CourseModel.find()
            res.status(200).send(courseList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async getCourseByID(req, res) {
        try {
            const { id } = req.params;

            const courseList = await CourseModel.findOne({_id: id})
            res.status(200).send(courseList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async getCourseByCondition(req, res) {
        try {
            const { title, description, instructors, scheduleDateTime } = req.body

            const courseList = await CourseModel.find({title: title, description: description, instructor: instructors, scheduleDateTime: scheduleDateTime})
            res.status(200).send(courseList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async getCourseByTitle(req, res) {
        try {
            const { title } = req.params;
        
            const courseList = await CourseModel.find({title: title})
            res.status(200).send(courseList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async getCourseByQueryParams(req, res) {
        try {
            const params = req.query;
            const courseList = await CourseModel.find(params)
            res.status(200).send(courseList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async updateCourse(req, res) {
        try {
            // Ambil ID dari parameter
            const { id } = req.params;

            // Ambil data dari Body
            const { title, description, instructors, scheduleDateTime } = req.body

            // Proses Update Data
            await CourseModel.updateOne({_id: id}, {title: title, description: description, instructor: instructors, scheduleDateTime: scheduleDateTime})
            res.status(200).send({message: "Success"})
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async deleteCourse(req, res) {
        try {
            const {id} = req.params;
            await CourseModel.deleteOne({_id: id})
            res.status(200).send({message: `${id} has been Deleted`})
        } catch (error) {
            res.status(500).send({err: error})
        }
    }
}


module.exports = CourseController