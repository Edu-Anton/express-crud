const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection')
const app = express();
//importing routes
const customerRoutes = require('./routes/customer');

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs') // No es necesario requerir ejs, sólo descargarlo como paquete
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(morgan('dev'))
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '',
  port:3306,
  database: 'expressjs-cruddb'
}, 'single')) // single hace referencia a una configuración de myConnection
app.use(express.urlencoded({extended: false})); // ayuda a recibir todos los datos desde el formulario // false porque solo se enviará texto simple

// routes
app.use('/', customerRoutes);

// static files : img, fuente, css, código fuente, scripts js 
app.use(express.static(path.join(__dirname, 'public')))

// server
app.listen(app.get('port'), () => {
  console.log('Server on port 3000')
});



