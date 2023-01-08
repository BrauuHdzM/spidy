const express = require('express');
const router = express.Router();
const path = require('path')
const multer = require('multer');

//Middleware para guardar la imagen en el servidor
const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '../imagesUploaded'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + ".jpg")
    }
})

const fileUpload = multer({
    storage: diskstorage
}).single('image')



//Funcion guardar imagen en la base de datos
router.post('/savePrediction', fileUpload, (req, res) => {
    console.log(req.body.prediction)
    console.log(req.file)
        //const data = fs.readFileSync(path.join(__dirname, '../images/' + req.file.filename))


})

//Ejemplo de query a la base de datos
router.get('/consulta', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.status(500).send('server error')


        //Insert 
        //Ejemplo con parametros
        /*conn.query('INSERT INTO image set ?', [{type, name, data}], (err, rows) => {
            if(err) return res.status(500).send('server error')

            res.send('image saved!')
        })*/
        //Ejemplo todo en un una cadena
        conn.query(`INSERT INTO spiders(species, medicallySignificant, description, imgPath) VALUES('MAURICIO', 1, 'ES FEO', 'PATH'); 
        SELECT LAST_INSERT_ID() AS ID;`, (err, rows, filds) => {
            if (err) {
                console.error('Error al ejecutar la consulta:', err);
                return;
            }
            let id = Object.values(JSON.parse(JSON.stringify(rows)));
            //const id = rows[1].constructor.ID;
            console.log(id[1][0].ID);
            res.send(id)
        })

        //Consulta 
        /*connection.query('SELECT * FROM tabla', function (error, results, fields) {
            if (error) throw error;
            console.log('Los resultados de la consulta son: ', results);
          });*/
    })
})

/*
router.post('/images/post', fileUpload,(req, res) => {

req.getConnection((err, conn) => {
    if(err) return res.status(500).send('server error')

        const type = req.file.mimetype
        const name = req.file.originalname
        const data = fs.readFileSync(path.join(__dirname, '../images/' + req.file.filename))

        conn.query('INSERT INTO image set ?', [{type, name, data}], (err, rows) => {
            if(err) return res.status(500).send('server error')

            res.send('image saved!')
        })
    })
    
})
*/








module.exports = router;