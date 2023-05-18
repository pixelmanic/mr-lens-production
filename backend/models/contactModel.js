const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
    },
    number:{
        type: String,
        required: true
    },
    address:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    service: {
        type: String,
        required: true
    },
    packages:{
        type:String,
    },
    details: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model("contacts" , contactSchema)