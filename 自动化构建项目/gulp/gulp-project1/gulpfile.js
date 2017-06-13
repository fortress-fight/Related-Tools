var gulp = require('gulp');
var rev = require('gulp-rev');

// gulp.task('css', function () {
//     return gulp.src('src/**/*.css')
//         .pipe(rev())
//         .pipe(gulp.dest('dist/css'))
//         .pipe(rev.manifest())
//         .pipe(gulp.dest('rev/css'));
// });

// gulp.task('scripts', function () {
//     return gulp.src('src/*.js')
//         .pipe(rev())
//         .pipe(gulp.dest('dist/js'))
//         .pipe(rev.manifest())
//         .pipe(gulp.dest('rev/js'));
// });


// var revCollector = require('gulp-rev-collector');
// var minifyHTML = require('gulp-minify-html');

// gulp.task('rev', function () {
//     return gulp.src(['./rev/js/*.json', './index.html'])
//         .pipe(revCollector({
//             replaceReved: true,
//             dirReplacements: {
//                 './src': './js',
//                 './src/components/header/js/': './js',
//                 // 'cdn/': function (manifest_value) {
//                 //     return '//cdn' + (Math.floor(Math.random() * 9) + 1) + '.' + 'exsample.dot' + '/img/' + manifest_value;
//                 // }
//             }
//         }))
//         .pipe(minifyHTML({
//             empty: true,
//             spare: true
//         }))
//         .pipe(gulp.dest('dist'));
// });


// var md5 = require('gulp-md5-plus');

// gulp.task();

// gulp.task('addmd5', function (){
//     return gulp.src('./src/*.js')
//         .pipe(md5(10, './dist/index.html'))
//         .pipe(gulp.dest('./dist'))
// });

var tpl = require('gulp-tpl');
var del = require('gulp-clean');

gulp.task('clean', function (){

    return gulp.src('./dist/**/*')
        .pipe(del())
});

// gulp.task('totpl', function (){
//     return gulp.src('./index.tpl')
//         .pipe(tpl.html({
//             name: 'a'
//         }))
//         .pipe(gulp.dest('./dist/tpl'))
// })

// var fileinclude = require('gulp-file-include'),
//   gulp = require('gulp');
 
// gulp.task('fileinclude', function() {
//   gulp.src(['index.html'])
//     .pipe(fileinclude())
//     .pipe(gulp.dest('dist'));
// });

var gulp       = require('gulp'),
    render     = require('gulp-smarty4js-render');
 
gulp.task('html', function () {
    gulp.src('./*.tpl')
    .pipe(gulp.dest('dist/'))
});