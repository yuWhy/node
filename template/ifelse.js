const template = require('art-template');
const path = require('path');

//标准语法
// {{数据}}
//原始语法
//<%=数据%>
var view = path.join(__dirname, 'views', 'ifelse.art');
var a = template(view, {
    name: '张山',
    age: 20
});
console.log(a);