// fs 写入文件
// fs.writeFile('文件路径/文件名称'，'数据', callback)
const fs = require('fs');
const content = '<h1>正在写入文件</h1>';

fs.writeFile('./wirteNew.html', content, err => {
    if(err != null) {
        console.log(err);
        return;
    }
    console.log('wirte success');
})