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
        breads: Bread,
        title: 'Index Page',
      })
})


// SHOW
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread:Bread[req.params.arrayIndex]
    })
  } else {
    res.render('404')
  }
})



module.exports = breads