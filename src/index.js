require('./connection/connectionMongo');
const cors = require('cors');
const express = require('express');
const app = express();
const body_parser = require('body-parser');
const morgan = require ('morgan');
const rutas = require('../Router/router');


app.use(cors());

app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());

app.use(morgan('dev'));
app.use(rutas)


var por = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('conectado al puerto', port);
});