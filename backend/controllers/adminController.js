const admins = require('../models/adminModel')
const mongoose = require('mongoose')
const Jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return Jwt.sign({_id}, process.env.SECRET, {expiresIn:"3d"})
}

// GET all admins

const getAdmins = async (req, res) => {
    const admin = await admins.find({}).sort({ createdAt: -1 });
    if (!admin) {
      return res.status(404).json({ msg: "no such admins" });
    }
    res.status(200).json(admin);
  };

const adminLogin = async (req, res) => {
    const {email,password} = req.body

    try {
        const admin = await admins.login(email,password)
        const Token = createToken(admin._id)
        res.status(200).json({email,Token})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const adminSignup = async (req,res) => {
    const {email,password} = req.body;

    try{
        const admin = await admins.signup(email,password)
        const Token = createToken(admin._id)
        res.status(200).json({email,admin,Token})
    } catch (error) {
        res.status(400).json({err:error.message})
    }
}

// DELETE an admin

const deleteAdmin = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(200).json({ msg: "no such admin" });
    }
  
    const admin = await admins.findOneAndDelete({ _id: id });
  
    if (!admin) {
      return res.status(400).json({ msg: "no such admin" });
    }
    res.status(200).json(admin);
  };

module.exports = {
    getAdmins,
    adminLogin,
    adminSignup,
    deleteAdmin
}