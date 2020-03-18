const http = require('http');
const path = require('path');
// 引用处理静态资源模块
const serveStatic = require('serve-static');
// 实现静态资源访问服务
const serve = serveStatic(path.join(__dirname, 'public'));
require('./server/index');
// 引用router模块
const router = require('./router/index');

const app = http.createServer();

app.on('request', async (req, res) => {
    serve(req, res, () => {});
    router(req, res, () => {});
    // res.end('<h2>hello user</h2>');
});
app.listen(3001);
console.log('app sccess');