# gulp-uglify

    ff 2017-06-14
    
## 简介

[gulp-uglify](https://github.com/terinjokes/gulp-uglify#user-content-options) 是用来压缩 js 代码的一个查件

### 基本使用

- 安装 gulp
- 安装插件：
    `npm install --save-dev gulp-uglify`
- 配置 gulp-file

        ```js
            gulp.task('default', function (){
                gulp.src('./js/gulp.js')
                    .pipe(uglify())
                    .pipe(gulp.dest('./dist/js'))
            })
        ```

- 补充：建议配合 pump 一起使用
    pump: 在编译的过程中如果出现错误，在命令行中会显示的十分复杂，而且只有很少的有用信息，而在 pump 中，会有更加详细的信息去帮助我们找出错误；

### gulp-uglify 的配置

gulp-ugiify 是基于 UglifyJS2 压缩的所以可以使用 uglifyjs 的相关配置