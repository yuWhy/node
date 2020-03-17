const template = require('art-template');
const path = require('path');

const temPath = path.join(__dirname, 'views', 'extend.art');
let a = template(temPath, {
    name: 'aaaaa'
});
console.log(a);
