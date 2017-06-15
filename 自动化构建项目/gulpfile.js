const rename = require('gulp-rename');
const minify = require('gulp-minify-css');
var ftp = require('vinyl-ftp');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var sftp = require('gulp-sftp');
var removeUseStrict = require("gulp-remove-use-strict");
var sourcemaps = require('gulp-sourcemaps');
var stripDebug = require('gulp-strip-debug');
var cleanCSS = require('gulp-clean-css');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var zip = require('gulp-zip');

var template = require('gulp-es6-template-strings'),
    sass = require('gulp-sass'),
    babel = require("gulp-babel"),
    es2015 = require("babel-preset-es2015");




gulp.task('releaseZip', function(){
    return gulp.src('./js')
        .pipe(zip('publish.zip'))
        .pipe(gulp.dest('release'))
});


var conn = ftp.create({
    host: '114.55.42.195',
    user: 'fufei2017',
    pass: '4Ap4Fdgs63gf#dsfo',
    port: 288,
    parallel: 1
});

var globs = [
    './dist/**'
];
gulp.task('test', function () {


    // using base = '.' will transfer everything to /public_html correctly 
    // turn off buffering in gulp.src for best performance 

    gulp.src(globs)
        // .pipe(rename('index.min.js')) // 需要在 sourcempas 前
        // .pipe(stripDebug())
        // .pipe(babel({
        //     presets: ['es2015', {
        //         "plugins": ["transform-remove-strict-mode"]
        //     }]
        // }))
        // .pipe(sourcemaps.init({
        //     loadMaps: true
        // }))
        // .pipe(uglify())
        // .pipe(sourcemaps.write('./'))
        // .pipe(gulp.dest('./dist/js'))
        .pipe(conn.newer('/test/'))
        .pipe(conn.dest('/test/'))
})

gulp.task('deltest', function (){
    conn.rmdir('/test/**/*.map', function (){
        console.log('suc')
    })
})































// gulp.task('cpsass', function () {
//     return gulp.src('./sass/style.scss')
//         // .pipe(sourcemaps.init())
//         .pipe(sass())
//         .pipe(postcss([autoprefixer()]))
//         .pipe(cleanCSS())
//         // .pipe(sourcemaps.write('./'))
//         .pipe(gulp.dest('./dist/css'));
// });

// gulp.task('compress', function (cb) {
//     pump([
//             gulp.src('./js/index.js'),
//             rename('index.min.js'),
//             babel({
//                 presets: ['es2015', {
//                     "plugins": ["transform-remove-strict-mode"]
//                 }]
//             }),
//             uglify(),
//             gulp.dest('dist/js')
//         ],
//         cb
//     );
// })


// gulp.task('lineup', function () {
//     var conn = ftp.create({
//         host: '114.55.42.195',
//         user: 'fufei2017',
//         pass: '4Ap4Fdgs63gf#dsfo',
//         port: 288,
//         parallel: 1
//     });

//     gulp.src('./js/index.js')
//         .pipe(rename('index.min.js')) // 需要在 sourcempas 前
//         .pipe(stripDebug())
//         .pipe(babel({
//             presets: ['es2015', {
//                 "plugins": ["transform-remove-strict-mode"]
//             }]
//         }))
//         .pipe(uglify())
//         .pipe(sourcemaps.write('./'))
//         .pipe(gulp.dest('./dist/js'))
//         .pipe(conn.dest('/moue3/templates/js/'));
// });

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

//     gulp.src('./js/index.js')
//         .pipe(rename('index.min.js')) // 需要在 sourcempas 前
//         .pipe(stripDebug())
//         .pipe(babel({
//             presets: ['es2015', {
//                 "plugins": ["transform-remove-strict-mode"]
//             }]
//         }))
//         .pipe(sourcemaps.init({
//             loadMaps: true
//         }))
//         .pipe(uglify())
//         .pipe(sourcemaps.write('./'))
//         .pipe(gulp.dest('./dist/js'))
//         .pipe(conn.dest('/moue3/templates/js/'));
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