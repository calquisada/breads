// dependencies
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// routes
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

const breadsController = require('./controllers/breads_controllers.js')
app.use('/breads', breadsController)

// listen
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})

