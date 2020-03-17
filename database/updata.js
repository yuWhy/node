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

// 更改数据.
// 1.查找元素
// 2.修改
// 更新单个
Courses.updateOne({_id: '5e6edc289f0fc73eece7d54d'}, {name: 'bb2'}).then(res=>console.log(res));
// 返回值 { n: 1, nModified: 1, ok: 1 }

//更新多个
Courses.updateOne({}, {name: 'bb2'}).then(res=>console.log(res));