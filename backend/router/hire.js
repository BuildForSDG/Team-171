const express = require('express');
const router = express.Router();

router.get('/hire', (req, res, next)=> res.status(200).json({message: 'you have reached the hire page'}));

module.exports = router;
