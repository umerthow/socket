const express = require('express');
const router = express.Router();

router.get('/ping', async function(req, res) {
  res.send('OK');
});

router.get('/error', async function(req, res, next) {
 try {
    throw ('internal error');
 } catch (error) {
    next(error)
 }
});

module.exports = router