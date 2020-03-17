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
        console.log(err);
    })
// 创建集合规则
// const coursesSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     isPublished: Boolean
// });

// 验证规则
const coursesSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true // 如果name不传，会报错。默认false
        required: [true, '请传入文章名字'],
        // minlength: 2,
        minlength: [2, '最小2个字符串'],
        maxlength: 5,
        trim: true // 去掉空格
    },
    age: {
        type: Number,
        min: [2, '最小值'],
        max: 5,
    },
    publishDate: {
        type: Date,
        // 默认值
        default: Date.now
    },
    category: {
        type: String,
        // 传入的值 只能是下面里面的值
        // enum: ['html', 'js', 'css'],
        enum: {
            values: ['html', 'js', 'css'],
            message: '自定义错误提示'
        }
    },
    author: {
        type: String,
        validate: {
            validator: v => {
                // 返回布尔值
                // true 验证成功
                return v && v.length > 10
            },
            message: '自定义错误提示'
        }
    },
    isPublished: Boolean
});

// 取原来有的
const Courses = mongoose.model('Courses', coursesSchema);

Courses.create({
    name: 'cc',
    age: 4,
    category: 'java',
    author: 'dd'
}).then(res => console.log(res))
.catch(error => {
    let err = error.errors;
    for(var attr in err) {
        console.log(err[attr]['message'])
    }
})