// 文件路径拼接
const path = require('path');

const finalPath = path.join('nodd','aa','css.js');
console.log(finalPath);

//_dirname 当前文件的绝对路径
const a = path.join(__dirname, 'wirteNew.js');
console.log(a);