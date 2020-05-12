const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=> res.status(200).json({message: 'you have reached the home page'}));

module.exports = router;
