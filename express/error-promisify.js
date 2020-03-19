// 处理错误 中间件
const express = require('express');
const app = express();
const fs = require('fs');
// 转成 promisify 格式
const promisify = require('util').promisify;
const readFile = promisify(fs.readFile);

app.get('/err', async (req, res, next) => {
    try {
        await readFile('./gfegf.html')
    } catch (err) {
        next(err);
    }
})

// 错误中间件 接受 throw
app.use((err, req, res, next) => {
    // res.start(400);
    // res.send('该页面不存在');
    res.status(500).send(err.message);
});


app.listen(3000);
console.log('server success 对比 http模块');