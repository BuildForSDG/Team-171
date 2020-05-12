const express = require('express');
const router = express.Router();

router.get('/listing', (req, res, next)=> res.status(200).json({message: 'you have reached the listing page'}));

module.exports = router;
