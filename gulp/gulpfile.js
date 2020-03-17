const gulp = require('gulp');
const htmlmin = require('htmlmin');

// 使用gulp.task建立函数
// 1、任务的名称
// 2、任务的回调函数
gulp.task('first', () => {
    console.log('first');

    // 获取要处理的文件
    gulp.src('./src/gulp/gulp.html')
        .pipe(gulp.dest('dist/html'))
})

//gulp插件使用
//1、html文件中代码的压缩操作
//2、抽取HTML文件的公共代码
gulp.task('htmlmin', ()=> {
    gulp.src('./src/*.html')
        // 压缩文件
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
})
