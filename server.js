// dependencies
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))




// routes
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

// breads
const breadsController = require('./controllers/breads_controllers.js')
app.use('/breads', breadsController)

// bakers
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)

// 404 Page
app.get('*', (req, res) => {
    res.send('This is a 404 page!')
  })  



//Mongo-Mongoose Connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})



// listen
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})







/* Day 7 Lessons

INTEGRATE
npm i mongoose
server.js
    require
    mongo<->mongoose connection

MODELING/SCHEMA BUILD 
breads.js 
     SCHEMA
     MODELING


HELPER METHODS
breads_controller.js
    Utilize methods

    */