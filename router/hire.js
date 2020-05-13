const express = require('express');
const router = express.Router();

router.get('/hire', (req, res, next) => {
  res.status(200).json({message: 'You have reached the hire module'});
})

module.exports = router;
