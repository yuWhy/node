const express = require('express');
const app = express();

// 接受所有的接口的中间件
// 所有接口都会先经过 但
// 不管get还是post
app.use((req, res, next) => {
    req.name = '李四';
    res.send({name: 'sds'}); // 如果send了 就不执行下面next了， 不然必须要加next
    next();
});
// app.use('/string', (req, res, next) => {
//     req.name = '二丫';
//     next();
// });
app.get('/', (req, res) => {
    res.send(req.name + ' fhefiwhief');
});
app.post('/list', (req, res) => {
    res.send({name: 'sds'});
});
app.get('/string', (req, res) => {
    res.send(req.name);
});

// 是从上往下查找的，如果到最后，说明没有定义这个接口
// 可以制定 没有该接口的 页面
// 在最后就不用加next了
app.use((req, res) => {
    // res.start(400);
    // res.send('该页面不存在');
    res.status(400).send('该页面不存在');
});

// app.use(fn({a: 1}));
// fnction fn(obj) {
//     return function(req, res, next) {
//         if (obj.a === 1) {
//             res.send(req.url);
//         } else {
//             res.send(req.method);
//         }
//     }
// }


app.listen(3000);
console.log('server success 对比 http模块');