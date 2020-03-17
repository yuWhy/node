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

//创建集合规则
let courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
});

//创建集合
const Course = mongoose.model('Course', courseSchema);

// 实例集合，添加保存数据 方法1
let course = new Course({
    name: 'aa',
    author: 'js',
    isPublished: true
});
// 保存数据
course.save();

// 实例集合，添加保存数据 方法2
// Course.create({
//     name: 'bb',
//     author: 'html',
//     isPublished: false
// }, (err, data) => {
//     console.log(err);
//     console.log(data);
// });

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

//查询所有
// User.find().then(res => console.log(res));

User.find({_id: '5e6ee56ca02fe5138d44f84e'}).then(res => console.log(res));

// User.findOne()

// $gt: 大于
// $lt: 小于
console.log('查询加条件');
User.find({age: {$gt: 20, $lt: 50}}).then(res => console.log(res));

//$in: 包含
User.find({hobbies: {$in: ['aa']}}).then(res => console.log(res));

//选择要查询的字段 前面加-是不想查询
User.find().select('name age -_id').then(res => console.log(res));

// 进行排序
User.find().sort('age').then(res => console.log(res));
// 降序
User.find().sort('-age').then(res => console.log(res));

// skip跳过前2条，limit限制查询4条
User.find().skip(2).limit(4).then(res => console.log(res));