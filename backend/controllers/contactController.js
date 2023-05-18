const allContacts =  require('../models/contactModel')
const mongoose = require('mongoose')

const getContacts = async (req,res) => {
    const contacts = await allContacts.find().sort({createdAt:-1})
    if(!contacts) {
        return res.status(404).json({msg:"no contacts"})
    }
    res.status(200).json(contacts)
}

const getContact = async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({msg:"no such contact"})
    }
    const contact = await allContacts.findById(id)
    if(!contact) {
        return res.status(400).json({msg:"no such contact"})
    }
    res.status(200).json(contact)
}

const postContact = async (req,res) => {
    const {name,email,number,address,date,service,packages,details} = req.body
    try {
        const contact = await allContacts.create({name,email,number,address,date,service,packages,details})
        res.status(200).json(contact)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const deleteContact = async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({msg: "no such contact"})
    }
    const contact = await allContacts.findOneAndDelete({_id:id})
    if(!contact) {
        return res.status(400).json({msg:"no such contact"})
    }
    res.status(200).json(contact)
}

module.exports = {
    getContacts,
    getContact,
    postContact,
    deleteContact
}