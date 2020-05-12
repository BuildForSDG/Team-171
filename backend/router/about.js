const express = require('express');
const router = express.Router();

router.get('/about', (req, res, next)=> res.status(200).json({message: 'you have reached the about page'}));

module.exports = router;
