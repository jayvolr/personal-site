const express = require('express')
const aboutRoutes = require('./routes/about')

express()
  .set('view engine', 'hjs')
  .use(express.static(__dirname + '/public'))
  .get('/', (req, res) => {
    res.render('home')
  })
  .use('/about', aboutRoutes)
  .listen('3000', () => {
    console.log('Server now listening on port 3000...')
  })
  .on('error', (error) => {
    console.log(error)
  })
