# gulp-rename

    ff 2017-06-16

## 简介

gulp-rename 主要是用于修改文件名，是一个十分常用的小工具

### 基本使用

- 安装 `cnpm i --save-dev gulp gulp-rename`
- 创建 `gukpfile.js`
- 实例 

        ```js
            var gulp = require('gulp'),
                rename = require('gulp-rename');

            gulp.task('step', function (){

                gulp.src('./src/index.html')
                    .pipe(rename('index.re.html'))
                    .pipe(gulp.dest('dist'))
            })
        ```
    这个配置就可以在 dist 下生成 index.re.html

### 相关配置

rename 虽然简单，但是也是具有一些扩展的功能的

1. 可以连着目录一起创建
    实例：

        ```js
            gulp.task('step1', function (){

                gulp.src('./src/index.html')
                    .pipe(rename('./step1/index.re1.html'))
                    .pipe(gulp.dest('dist'))
            })
        ```
    这里创建的就是 dist/step1/index.re1.thml

2. 可以根据函数设置
    实例：

        ```js
            gulp.task('step2', function (){

                gulp.src('./src/index.html')
                    .pipe(rename(function (path) {
                        path.dirname += './dist/step2';
                        path.basename += '-step2';
                        path.extname = '.js'
                    }))
                    .pipe(gulp.dest('dist'))
            })
        ```
    这里创建的就是 dist/step2/index-step2.js

3. 可以根据参数对象设置
    实例：

        ```js
            
            gulp.task('step3', function (){

                gulp.src('./src/index.html')
                    .pipe(rename({
                        dirname: './dist/step3',
                        basename: 'index',
                        prefix: 'gulp-',
                        suffix: '-step3',
                        extname: '.js'
                    }))
                    .pipe(gulp.dest('dist'))
            });
        ```
    注意这里创建的是 dist/dist/step3/gulp-index-step3.js 并不是 src 的目录去添加，可以通过 src 中的 base 参数修正