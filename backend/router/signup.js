const express = require('express');
const router = express.Router();

router.get('/signup', (req, res, next)=> res.status(200).json({message: 'you have reached the signup page'}));

module.exports = router;