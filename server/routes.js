const express = require('express');
const path = require('path');
const router = express.Router();

//routes with directory path to the view files.
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/about.html'));
});

router.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/contact.html'));
});

router.get('/shop', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/shop.html'));
  });
  
module.exports = router;