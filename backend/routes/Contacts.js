const express = require('express')
const {
    getContacts,
    getContact,
    postContact,
    deleteContact
} = require('../controllers/contactController')

const router = express.Router()

// GET contacts

router.get('/' , getContacts)

// GET a contact

router.get('/:id' , getContact)

// POST a contact

router.post('/' , postContact)

// DELETE a contact

router.delete('/:id' , deleteContact)

module.exports = router