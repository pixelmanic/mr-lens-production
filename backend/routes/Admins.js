const express = require('express')
const {
    getAdmins,
    adminLogin,
    adminSignup,
    deleteAdmin
} = require('../controllers/adminController')

const router = express.Router()

router.get('/' , getAdmins)

router.post('/login' , adminLogin)

router.post('/signup', adminSignup)

router.delete('/:id', deleteAdmin)

module.exports = router