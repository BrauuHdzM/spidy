const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

const routesToRedirect = [
    '/Nosotros',
    '/InformacionArana',
    '/Detectar',
    '/Escanear',
    '/CameraCapture',
    '/Mapa',
    'AdminPanel'
]

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
//app.use(bodyParser.urlencoded());

//Routes

app.use('/predictions', require('./routes/predictions.routes'));

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