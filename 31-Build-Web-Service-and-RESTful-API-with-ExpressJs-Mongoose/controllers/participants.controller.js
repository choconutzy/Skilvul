const ParticipantModel = require("../models/participants")

class ParticipantController {
    static async createNewParticipant(req, res) {
        // get `name` from req body.
        // create a new participant object.
        // save to db.
        try {
            const { name, dateOfBirth, email, phone, courses} = req.body
            const participant = new ParticipantModel({name: name, dateOfBirth: dateOfBirth, email: email, phone: phone, courses: courses})
        
            const saved = await participant.save()
            res.status(201).send(saved);
        } catch (error) {
            res.status(500).send({err: error})
        }

    }

    static async getAllParticipant(req, res) {
        try {
            const participantList = await ParticipantModel.find()
            res.status(200).send(participantList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async getParticipantByID(req, res) {
        try {
            const { id } = req.params;

            const participantList = await ParticipantModel.findOne({_id: id})
            res.status(200).send(participantList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async getParticipantByCondition(req, res) {
        try {
            const { name, dateOfBirth, email, phone, courses} = req.body

            const participantList = await ParticipantModel.find({name: name, dateOfBirth: dateOfBirth, email: email, phone: phone, courses: courses})
            res.status(200).send(participantList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async getParticipantByName(req, res) {
        try {
            const { name } = req.params;
        
            const participantList = await ParticipantModel.find({name: name})
            res.status(200).send(participantList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async getParticipantByQueryParams(req, res) {
        try {
            const params = req.query;
            const participantList = await ParticipantModel.find(params)
            res.status(200).send(participantList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async updateParticipant(req, res) {
        try {
            // Ambil ID dari parameter
            const { id } = req.params;

            // Ambil data dari Body
            const { name, dateOfBirth, email, phone, courses} = req.body

            // Proses Update Data
            await ParticipantModel.updateOne({_id: id}, {name: name, dateOfBirth: dateOfBirth, email: email, phone: phone, courses: courses})
            res.status(200).send({message: "Success"})
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async deleteParticipant(req, res) {
        try {
            const {id} = req.params;
            await ParticipantModel.deleteOne({_id: id})
            res.status(200).send({message: `${id} has been Deleted`})
        } catch (error) {
            res.status(500).send({err: error})
        }
    }
}


module.exports = ParticipantController