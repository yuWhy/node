const template = require('art-template');
const path = require('path');

var view = path.join(__dirname, 'views', 'index.art');
var a = template(view, {
    name: '张三',
    age: 22
});
console.log(a);