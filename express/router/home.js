const express = require('express');
const home = express.Router();

home.get('/', (req, res) => {
    res.send('/');
})
home.get('/index', (req, res) => {
    res.send('/index');
})

module.exports = home;