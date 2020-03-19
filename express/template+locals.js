const express = require('express');
const path = require('path');
const app = express();

app.engine('art', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');

// locals 可以设置公共数据 所有模板可以直接取
app.locals.aUser = [{
    name: '张三',
    age: 18
}, {
    name: '李四',
    age: 15
}];

app.get('/index', (req, res) => {
    res.render('index', {
        msg: 'this is date'
    });
});

app.listen(3000);
console.log('sever success');