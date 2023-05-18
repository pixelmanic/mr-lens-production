const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const adminSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true
    }
},{timestamps:true})

// signup static schema

adminSchema.statics.signup = async function(email,password){
    const exists = await this.findOne({email})

    if(exists){
        throw Error('email already exists')
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt)

    const admin = await this.create({email,password:hash})
    return admin
}

// login static schema

adminSchema.statics.login = async function(email,password){
    const admin = await this.findOne({email})

    if(!admin){
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, admin.password)
    if(!match){
        throw Error('Incorrect password')
    }

    return admin
}

module.exports = mongoose.model('admins', adminSchema)