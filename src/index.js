const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const fs = require('fs');
const mysql = require('mysql');
const myconn = require('express-myconnection')

const routesToRedirect = [
    '/Nosotros',
    '/InformacionArana',
    '/Detectar',
    '/Escanear',
    '/CameraCapture',
    '/Mapa',
    '/AdminPanel'
]

//Database connection
app.use(myconn(mysql, {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'spidy',
    multipleStatements: true
}));

//Middleware
app.use(morgan('dev'));

//Settings
app.set('port', process.env.PORT || 3000);

//Algo que agregu+e
app.use(express.json());
//Routes
app.use('/predictions', require('./routes/predictions.routes'));
//app.use('/admin', require('./routes/admin.routes'));

app.use((req, res, next) => {
    if (routesToRedirect.includes(req.path)) {
        fs.readFile('./src/public/index.html', (err, data) => {
            if (err) throw err;
            res.setHeader('Content-Type', 'text/html');
            res.send(data);
        });
    } else {
        next();
    }
});


//Static files
app.use(express.static(path.join(__dirname, 'public')))

//Start server
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
})