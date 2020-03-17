const template = require('art-template');
const path = require('path');

var temPath = path.join(__dirname, 'views', 'for.art');
var a = template(temPath, {
    users: [
        {
            name: '张三',
            age: 18
        }, {
            name: '李四',
            age: 15
        }, {
            name: '王八',
            age: 18
        }
    ]
});
console.log(a);