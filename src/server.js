const express = require('express') //common js
const path = require('path'); //common js
//import express from 'express'; //es modules

const app = express()
const port = 3000

//config template engine
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World vs Hoi Dan IT $ Eric!')
})

app.get('/abc', (req, res) => {
  res.send('Check ABC')
})

app.get('/hoidanIT', (req, res) => {
  //res.send('Hello World vs Hoi Dan IT $ Eric!')
  res.render('sample.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})