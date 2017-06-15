const rename = require('gulp-rename');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var sftp = require('gulp-sftp');
var sourcemaps = require('gulp-sourcemaps');
var template = require('gulp-es6-template-strings'),
    babel = require("gulp-babel"),
    es2015 = require("babel-preset-es2015");

gulp.task('compress', function (cb) {
    pump([
            gulp.src('./js/index.js'),
            rename('gulp.min.js'), // 需要在 sourcempas 前
            babel({
                presets: ['es2015', {
                    "plugins": ["transform-remove-strict-mode"]
                }]
            }),
            uglify(),
            gulp.dest('./js')
        ],
        cb
    );
})
var ftp = require('vinyl-ftp');

// gulp.task('default', function () {
//     var conn = ftp.create({
//         host: '114.55.42.195',
//         user: 'fufei2017',
//         pass: '4Ap4Fdgs63gf#dsfo',
//         port: 288,
//         parallel: 1
//     });

//     // using base = '.' will transfer everything to /public_html correctly 
//     // turn off buffering in gulp.src for best performance 

//     gulp.src('./js/gulp.js')
//         .pipe(rename('gulp.min.js')) // 需要在 sourcempas 前
//         .pipe(sourcemaps.init({
//             loadMaps: true
//         }))
//         .pipe(uglify())
//         .pipe(sourcemaps.write('./'))
//         .pipe(gulp.dest('./dist/js'))        
//         .pipe(conn.dest('/'));
// })


// 'use strict';

// var browserify = require('browserify');
// var gulp = require('gulp');
// var source = require('vinyl-source-stream');
// var buffer = require('vinyl-buffer');
// var uglify = require('gulp-uglify');
// var sourcemaps = require('gulp-sourcemaps');
// var gutil = require('gulp-util');

// gulp.task('javascript', function () {
//   // 在一个基础的 task 中创建一个 browserify 实例
//   var b = browserify({
//     entries: './entry.js',
//     debug: true
//   });

//   return b.bundle()
//     .pipe(source('app.js'))
//     .pipe(buffer())
//     .pipe(sourcemaps.init({loadMaps: true}))
//         // 在这里将转换任务加入管道
//         .pipe(uglify())
//         .on('error', gutil.log)
//     .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest('./dist/js/'));
// });