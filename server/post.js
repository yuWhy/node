const http = require('http');
const querystring = require('querystring');

const app = http.createServer();
app.on('request', (req, res) => {
    let postData = '';
    req.on('data', (chunk) => postData += chunk);
    req.on('end', () => {
        console.log(querystring.parse(postData));
    })
    res.end('ok');
});

app.listen(3000);
console.log('app sccess');