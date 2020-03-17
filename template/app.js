const template = require('art-template');
const path = require('path');

//标准语法
// {{数据}}
//原始语法
//<%=数据%>
var view = path.join(__dirname, 'views', 'index.art');
var a = template(view, {
    name: '张三',
    age: 22,
    content: '<h1>html</h1>'
});
console.log(a);