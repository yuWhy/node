// 处理错误 中间件
const express = require('express');
const app = express();
const fs = require('fs');

app.get('/index', (req, res) => {
    res.send(req.query);
});

// http://localhost:3000/find/123
app.get('/find/:id', (req, res) => {
    res.send(req.params);
});

app.listen(3000);
console.log('server success 对比 http模块');