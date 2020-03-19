const express = require('express');
const app = express();
// bodyparser 解析post参数 用req.body
const bodyparser = require('body-parser');

// extended: true 的话会加载第三方qs进行处理， 如果false是用内部的qu'er, 虽然qs功能强大，但false够了
app.use(bodyparser.urlencoded({ extended: false }));

app.post('/index', (req, res) => {
    res.send(req.body)
});

app.listen(3000);