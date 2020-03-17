// 集合关联
const mongoose = require('mongoose');

// 连接数据库 如果testMongod1没有则会新建一个
// 但如果只是创建集合 但没有插入数据，数据库是不会创建playground的
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true  })
    .then((data) => {
        // console.log(data);
        console.log('success')
    })
    .catch((err) => {
        console.log('filed');
    })

const userScheam = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const postScheam = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const User = mongoose.model('User', userScheam);
const Post = mongoose.model('Post', postScheam);

// User.create({
//     name: 'aaa',
// });

// Post.create({
//     titile: '123',
//     author: '5e6f170d882ddd244c07701a'
// });

// Post.find().then(res => console.log(res));
Post.find().populate('author').then(res => console.log(res));
