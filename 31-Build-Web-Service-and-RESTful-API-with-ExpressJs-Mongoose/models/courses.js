const { ObjectId } = require("mongodb")
const mongoose = require("mongoose")

const coursesSchema = new mongoose.Schema({
    title: {
        type: String,
        min: 1,
        max: 50,
        required: true
    },
    description: {
        type: String,
        min: 1,
        max: 100,
        required: true
    },
    instructor: {
        type: [ObjectId],
        ref: 'instructor',
        required: true
    },
    scheduleDateTime: {
        type: Date,
        required: true
    },
    
},  {
    timestamps: true,
    versionKey : false
})

const CoursesrModel = mongoose.model("courses", coursesSchema)
module.exports = CoursesrModel