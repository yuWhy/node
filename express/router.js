// 路由
const express = require('express');
const home = require('./router/home');
const app = express();

app.use('/home', home);

app.listen(3000);
console.log('server success');