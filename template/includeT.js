// 子模版 公共区域
const template = require('art-template');
const path = require('path');

const temUrl = path.join(__dirname, 'views', 'includeT.art');
let a = template(temUrl, {
    name: 'dhigfiuqgfi'
});

console.log(a);