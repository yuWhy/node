const mongoose = require('mongoose');

// 连接数据库 如果testMongod1没有则会新建一个
// 但如果只是创建集合 但没有插入数据，数据库是不会创建playground的
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true  })
    .then((data) => {
        console.log(data);
        console.log('success')
    })
    .catch((err) => {
        console.log('filed');
        console.log(err);
    })
// 创建集合规则
const coursesSchema = new mongoose.Schema({
    name: String,
    age: Number,
    isPublished: Boolean
});

// 取原来有的
const Courses = mongoose.model('Courses', coursesSchema);

// 查找数据 并删除第一个 并返回删除项
Courses.findOneAndDelete({_id: '5e6ee8c2787c5e16fc8e48e8'}).then((res) => console.log(res));

// 创建集合规则
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    hobbies: [String]
});

// 取原来有的
const User = mongoose.model('User', userSchema);

// 删除多个
User.deleteMany({}).then(res => console.log(res));
// 返回值{ n: 3, ok: 1, deletedCount: 3 }