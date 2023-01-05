const express = require('express');
const router = express.Router();
const path = require('path')

const multer = require('multer');

const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '../imagesUploaded'),
    filename: (req, file, cb) => {
        cb(null, Date.now() +".jpg")
    }
})

const fileUpload = multer({
    storage: diskstorage
}).single('image')


router.post('/savePrediction', fileUpload, (req, res) => {
    console.log(req.body.prediction)
    console.log(req.file)
        //const data = fs.readFileSync(path.join(__dirname, '../images/' + req.file.filename))


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