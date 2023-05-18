const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workSchema = new Schema({
    imgSrc:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("works",workSchema)