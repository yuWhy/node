// 处理错误 中间件
const express = require('express');
const app = express();
const fs = require('fs');

app.get('/err', (req, res, next) => {
    // 同步触发错误
    // throw new Error('报错了报错了');
    // res.send('ok');

    // 异步要手动触发
    fs.readFile('./dome.html', 'utf8', (err, res) => {
        if (err != null) {
            next(err); // next带参数 ，说明手动触发错误
        } else {
            res.send('ok');
        }
    })
})

// 错误中间件 接受 throw
app.use((err, req, res, next) => {
    // res.start(400);
    // res.send('该页面不存在');
    res.status(500).send(err.message);
});


app.listen(3000);
console.log('server success 对比 http模块');