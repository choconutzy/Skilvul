const InstructorModel = require("../models/instructors")

class InstructorController {
    static async createNewInstructor(req, res) {
        // get `name` from req body.
        // create a new instructor object.
        // save to db.
        try {
            const { name, dateOfBirth, location } = req.body
            const instructor = new InstructorModel({name: name, dateOfBirth: dateOfBirth, location: location})
        
            const saved = await instructor.save()
            res.status(201).send(saved);
        } catch (error) {
            res.status(500).send({err: error})
        }

    }

    static async getAllInstructor(req, res) {
        try {
            const instructorList = await InstructorModel.find()
            res.status(200).send(instructorList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async getInstructorByID(req, res) {
        try {
            const { id } = req.params;

            const instructorList = await InstructorModel.findOne({_id: id})
            res.status(200).send(instructorList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async getInstructorByCondition(req, res) {
        try {
            const { name, dateOfBirth, location } = req.body

            const instructorList = await InstructorModel.find({name: name, dateOfBirth:dateOfBirth, location: location})
            res.status(200).send(instructorList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async getInstructorByName(req, res) {
        try {
            const { name } = req.params;
        
            const instructorList = await InstructorModel.find({name: name})
            res.status(200).send(instructorList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async getInstructorByQueryParams(req, res) {
        try {
            const params = req.query;
            const instructorList = await InstructorModel.find(params)
            res.status(200).send(instructorList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async updateInstructor(req, res) {
        try {
            // Ambil ID dari parameter
            const { id } = req.params;

            // Ambil data dari Body
            const { name, dateOfBirth, location } = req.body

            // Proses Update Data
            await InstructorModel.updateOne({_id: id}, {name: name, dateOfBirth: dateOfBirth, location: location})
            res.status(200).send({message: "Success"})
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async deleteInstructor(req, res) {
        try {
            const {id} = req.params;
            await InstructorModel.deleteOne({_id: id})
            res.status(200).send({message: `${id} has been Deleted`})
        } catch (error) {
            res.status(500).send({err: error})
        }
    }
}


module.exports = InstructorController