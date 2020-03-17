const mongoose = require('mongoose');
// 连接数据库， 27017是默认端口
mongoose.connect('mongodb://localhost:27017/nodeDome1', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log('mongodb success'))
    .catch(() => console.log('mongodb file'))