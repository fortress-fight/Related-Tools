# gulp-uglify

    ff 2017-06-14
    
## 简介

gulp-uglify 是用来压缩 js 代码的一个查件

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

### gulp-uglify 的配置

    gulp-ugiify 是基于 UglifyJS2 压缩的所以可以使用 uglifyjs 的相关配置