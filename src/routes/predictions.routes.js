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
    const prediction = req.body.prediction;
    const date = new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' ');
    const storagePath = req.file.filename;
    console.log(req.body.prediction)
    console.log(req.file)
    console.log(req.file.filename);

    req.getConnection((err, conn) => {
        if (err) return res.status(500).send('server error')

        conn.query('INSERT INTO predictions set ?;SELECT LAST_INSERT_ID() AS ID;', [{ prediction, date, storagePath }], (err, rows, filds) => {
            if (err) {
                console.error('Error al ejecutar la consulta:', err);
                return;
            }
            let id = Object.values(JSON.parse(JSON.stringify(rows)));
            console.log(id[1][0].ID);
            res.send(id[1][0]);
        })
    });

});







module.exports = router;