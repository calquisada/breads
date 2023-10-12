const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// index
// breads.get('/', (req, res) => {
   // res.render('index')
    // res.send(Bread)
// })

// INDEX
breads.get('/', (req, res) => {
    res.render('Index',
      {
        breads: Bread
      }
    )
  // res.send(Bread)
})


// show
breads.get('/:arrayIndex', (req, res) => {
    res.send(bread[req.params.arrayIndex])
})


module.exports = breads