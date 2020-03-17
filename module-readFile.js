const fs = require('fs');

// 获取文件
fs.readFile('./01.js', 'utf-8', (err, doc) => {
    console.log(err);
    console.log(doc);
})