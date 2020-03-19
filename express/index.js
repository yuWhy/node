const express = require('express');
const app = express();
const path = require('path');

// 静态资源
const staticUrl = path.join(__dirname, 'static');
app.use(express.static(staticUrl))

app.get('/', (req, res) => {
    res.send('fhefiwhief');
});

app.get('/list', (req, res) => {
    res.send({name: 'sds'});
});
app.get('/string', (req, res) => {
    res.send('<h1>send</h1>');
});

// 中间件
// app.get 就是一个中间件
// 可以加next 传值给下一个中间件
app.get('/getName', (req, res, next) => {
    req.name = '张三';
    next();
});
app.get('/getName', (req, res, next) => {
    res.send(req.name + '用next传值的');
});

app.listen(3000);
console.log('server success 对比 http模块');