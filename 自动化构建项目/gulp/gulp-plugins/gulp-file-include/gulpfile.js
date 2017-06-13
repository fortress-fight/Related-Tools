var step1 = "基础使用 -- 改变语法前缀";

// const gulp = require('gulp'),
//     fileinclude = require('gulp-file-include');

// gulp.task('default', function (){

//     gulp.src('./index.html')
//         .pipe(fileinclude({
//             prefix: '{FF:',
//             suffix: '}'
//         }))
//         .pipe(gulp.dest('./dist'))
// });

var step2 = "基础使用 -- 修改路径";

// const gulp = require('gulp'),
//     fileinclude = require('gulp-file-include');

// gulp.task('default', function (){

//     gulp.src('./index.html')
//         .pipe(fileinclude({
//             prefix: '{FF:',
//             suffix: '}',
//             basepath: './src'
//         }))
//         .pipe(gulp.dest('./dist'))
// });

// var step3 = "基础使用 -- filter(实验失败，感觉是对文件进行预先处理)";

// const gulp = require('gulp'),
//     fileinclude = require('gulp-file-include');

// gulp.task('default', function (){

//     gulp.src('./index.html')
//         .pipe(fileinclude({
//             prefix: '{FF:',
//             suffix: '}',
//             basepath: './src',
//             filter: {
//                 header: './src/footer/footer.html'
//             }
//         }))
//         .pipe(gulp.dest('./dist'))
// });

// var step4 = "基础使用 -- context(全局参数)";

// const gulp = require('gulp'),
//     fileinclude = require('gulp-file-include');

// gulp.task('default', function (){

//     gulp.src('./index.html')
//         .pipe(fileinclude({
//             prefix: '{FF:',
//             suffix: '}',
//             basepath: './src',
//             context: {
//                 name: 'ff'
//             }
//         }))
//         .pipe(gulp.dest('./dist'))
// });

var step5 = "基础使用 -- context(全局参数)";

const gulp = require('gulp'),
    fileinclude = require('gulp-file-include');

gulp.task('default', function (){

    gulp.src('./index.html')
        .pipe(fileinclude({
            prefix: '{FF:',
            suffix: '}',
            context: {
                name: 'ff',
                show: false
            },
            indent: 0
        }))
        .pipe(gulp.dest('./dist'))

});