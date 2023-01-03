const express = require('express');
const router = express.Router();

router.post('/savePrediction', async(req, res) => {

    res.json('received');
});

module.exports = router;