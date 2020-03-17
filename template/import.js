const template = require('art-template');
const path = require('path');
const dateformat = require('dateformat');


// 模板配置
template.defaults.imports.dateformat = dateformat;

// const pathS = path.join(__dirname, 'views', 'import.art');
// let a = template(pathS, {
//     times: new Date()
// });

// 设置模板根目录
template.defaults.root = path.join(__dirname, 'views');

// 设置默认模板后缀名 下面引用就不用写.art
template.defaults.extname = '.art';
let a = template('import', {
    times: new Date()
});
console.log(a);