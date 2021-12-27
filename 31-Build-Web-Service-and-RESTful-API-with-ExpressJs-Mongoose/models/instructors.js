const mongoose = require("mongoose")

const instructorsSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 1,
        max: 100,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: false
    }
},  {
    timestamps: true,
    versionKey : false
})

const InstructorModel = mongoose.model("instructor", instructorsSchema)
module.exports = InstructorModel