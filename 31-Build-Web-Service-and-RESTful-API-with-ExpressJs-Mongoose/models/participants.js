const { ObjectId } = require("mongodb")
const mongoose = require("mongoose")

const participantsSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 1,
        max: 50,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        min: 1,
        max: 50,
        required: false
    },
    phone: {
        type: String,
        max:13,
        required: false
    },
    courses: {
        type: [ObjectId],
        ref: 'courses'
    },
    
},  {
    timestamps: true,
    versionKey : false
})

const ParticipantsSchema = mongoose.model("participants", participantsSchema)
module.exports = ParticipantsSchema