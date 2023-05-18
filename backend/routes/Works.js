const express = require('express')
const {
    getWorks,
    getWork,
    postWork,
    deleteWork,
    updateWork,
} = require('../controllers/workController')


const router = express.Router()

// GET works

router.get('/' , getWorks)

// GET a work

router.get('/:id' , getWork)

// POST a work

router.post('/' , postWork)

// DELETE a work

router.delete('/:id' , deleteWork)

// UPDATE a work

router.patch('/:id' , updateWork)

module.exports = router