const http = require('http')

const app = http.createServer();
app.on('request', (req, res) => {
    console.log(req);
    res.end('<h2>hello user</h2>')
});
app.listen(3000);
console.log('app sccess');