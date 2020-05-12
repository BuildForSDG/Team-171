const express = require('express');
const router = express.Router();

router.get('/login', (req, res, next)=> res.status(200).json({message: 'you have reached the login page'}));

module.exports = router;
