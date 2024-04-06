const mysql = require('mysql');
const express = require('express');
const cors = require('cors')
const app = express();
const dbConnection = require('./db/db');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json())

port = 9000;
app.listen(port, ()=> console.log(`Servidor en el puerto: ${port}`))

app.get('/', (req, res)=>{
  res.send('hola MUNDO')
})