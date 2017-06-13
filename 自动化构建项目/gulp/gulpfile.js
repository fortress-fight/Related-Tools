var gulp = require('gulp'),
    fs = require('fs'),
    fileinclude = require('gulp-file-include'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');

gulp.task('default', function () {
    gulp.run([]);
});

// src 代表根目录
gulp.task('copy-index', function () {
    return gulp.src('./index.html')
        .pipe(gulp.dest('dist'))
});

// *.*就是全部文件
// */* 走一级，匹配下一层
// **/* 所有都要
gulp.task('copy-imgs', function () {
    return gulp.src('./src/*.*')
        .pipe(gulp.dest('./dist'))
})

// 打包多个
gulp.task('data', function () {
    return gulp.src(['xml/*.xml', 'json/*.json'])
        .pipe(gulp.dest('dist/data'))
})

// 跳过一些文件
// 排除类似secret-01.json的文件

// return gulp.src(['xml/*.xml','json/*.json','!json/secret-*.json'])
//     .pipe(gulp.dest('dist/data'))

// 监视watch
gulp.task('copy-index', function () {
    return gulp.src('index.html')
        .pipe(gulp.dest('dist'))
})


gulp.task('watch', function () {
    gulp.watch('index.html', ['copy-index'])
})
// 开放监听

// gulp watch

// sass 转 css
// yarn add gulp-sass -S
gulp.task('sass', function () {
    gulp.src('./src/components/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
})

const connect = require('gulp-connect')

gulp.task('server', function () {
    connect.server({
        root: 'dist/',
        port: 8080,
        livereload: true
    })
})

// gulp.task('watch', function () {
//     gulp.watch('index.html', ['copy-index'])
// })

// gulp.task('copy-index', function () {
//     return gulp.src('index.html')
//         .pipe(gulp.dest('dist'))
//         .pipe(connect.reload())
// })

// gulp.task('default', ['server', 'watch']);

// yarn add --dev gulp-concat
// <script></script><script></script>

// 这样引入？？有两个请求哦！！减少请求数量！

gulp.task('script', function () {
    return gulp.src([
            './src/components/header/scss/style.scss',
            './src/components/headerTool/scss/headerTool.scss'
        ])
        .pipe(concat('style.scss'))
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
})

// 压缩

const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const del = require('del');
const jshint = require('gulp-jshint')

gulp.task('clean', function (){
    return del('./dist');
});

gulp.task('zip', function () {
    return gulp.src([
            './src/components/header/js/header.js',
            './src/components/headerTool/js/headerTool.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .pipe(rename('vendor.min.js'))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('lint', function (){
    gulp.src([
            './src/components/header/js/header.js',
            './src/components/headerTool/js/headerTool.js'
        ])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
})


// var gulp = require('gulp');
// var uglify = require('gulp-uglify');
// var pump = require('pump');

// gulp.task('compress', function (cb) {
//     pump([
//             gulp.src(['./src/components/header/js/header.js',
//                 './src/components/headerTool/js/headerTool.js'
//             ]),
//             uglify(),
//             gulp.dest('dist')
//         ],
//         cb
//     );
// });

// ##压缩css
const minify = require('gulp-minify-css')

gulp.task('minicss', function () {
    return gulp.src([
            './src/components/header/scss/style.scss',
            './src/components/headerTool/scss/headerTool.scss'
        ])
        .pipe(concat('style.scss'))
        .pipe(sass())
        .pipe(minify())
        .pipe(gulp.dest('dist/css'))
})

// ##图片优化
//     const imagemin = require('gulp-imagemin')
// gulp.task('imagemin', function() { return gulp.src('images/icons/*.{png,jpg}')

// .pipe(gulp.dest('dist/images/icon'))
// .pipe(imagemin())
// .pipe(gulp.dest('dist/images/icon'))
// })

// 在build任务中过滤目标文件中的console.log();

var stripDebug = require('gulp-strip-debug');
gulp.task('build', function (){
    return gulp.src([
            './src/components/header/js/header.js',
            './src/components/headerTool/js/headerTool.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(rename('vendor.min.js'))
        .pipe(gulp.dest('dist/js'))
})


// // js压缩
// gulp-uglify
// // css压缩
// gulp-clean-css
// // 重命名
// gulp-rename
// // 合并文件
// gulp-concat
// // 捕获错误
// gulp-plumber
// // 打包
// gulp-zip
// //过率console信息
// gulp-strip-debug

var plumber  = require('gulp-plumber');
var zip = require('gulp-zip');

gulp.task('releaseZip', function(){
    return gulp.src('dist/**/*')
        .pipe(plumber())
        .pipe(zip('publish.zip'))
        .pipe(gulp.dest('release'))
});