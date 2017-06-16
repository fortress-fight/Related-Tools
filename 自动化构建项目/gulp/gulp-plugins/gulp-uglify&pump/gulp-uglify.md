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
            // step1
            gulp.task('default', function (){
                gulp.src('./js/gulp.js')
                    .pipe(uglify())
                    .pipe(gulp.dest('./dist/js'))
            })
        ```

- 补充：建议配合 pump 一起使用

        ```js
            // step2
            gulp.task('step1', function () {

                pump([
                    gulp.src('./js/script.js'),
                    uglify(),
                    gulp.dest('./dist')
                ])
            });
        ```
    pump: 在编译的过程中如果出现错误，在命令行中会显示的十分复杂，而且只有很少的有用信息，而在 pump 中，会有更加详细的信息去帮助我们找出错误，pump 可以用在很多的情况下；
- 注：gulp-uglify 不能处理含有 ES6 语法的 js 文件，回报编译错误

### gulp-uglify 的配置

gulp-ugiify 是基于 UglifyJS2 压缩的,所以可以使用 uglifyjs 的相关配置 [minify option](https://github.com/mishoo/UglifyJS2#minify-options)

这个配置就十分的复杂了，回头再说吧