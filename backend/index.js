require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const worksRoutes = require('./routes/Works')
const adminsRoutes = require('./routes/Admins')
const contactsRoutes = require('./routes/Contacts')

const app = express()

const corsOptions = {
    origin: 'http://localhost:3000'
  };

// middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: '20mb' }));

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//Routes

app.use('/works' , worksRoutes)
app.use('/admins' , adminsRoutes)
app.use('/contacts' , contactsRoutes)


// connecting to database

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{console.log('working on port',process.env.PORT)})
    })
    .catch((error)=>{
        console.log('couldnot connect')
    })