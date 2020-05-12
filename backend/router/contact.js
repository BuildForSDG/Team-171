const express = require('express');
const router = express.Router();

router.get('/contact', (req, res, next)=> res.status(200).json({message: 'you have reached the contact  page'}));

module.exports = router;
