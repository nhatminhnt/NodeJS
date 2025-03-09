const { config } = require('dotenv');
const express = require('express'); //common js
const path = require('path'); //common js
require('dotenv').config(); 
//import express from 'express'; //es modules

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// config static files
app.use(express.static(path.join(__dirname, 'public')));

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

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})