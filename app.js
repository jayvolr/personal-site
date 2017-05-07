const express = require('express')
const favicon = require('serve-favicon')
const path = require('path')

express()
  .use(favicon(path.join(__dirname, 'public','images','jonIcon.ico')))
  .use(express.static(__dirname + '/public'))
  .get('/about/:app', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/'+req.params.app+'.html'))
  })
  .listen('3000', () => {
    console.log('Server now listening on port 3000...')
  })
  .on('error', (error) => {
    console.log(error)
  })
