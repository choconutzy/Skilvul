const mongoose = require("mongoose")

const opts = {
        timestamps:true
    }

const ArtisSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    genre: {
        type: String,
    },
    songs: {
        type : Array,
        "default" : []
    }
}, opts)


const ArtisModel = mongoose.model("Artis", ArtisSchema)
module.exports = ArtisModel