const gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    pump = require('pump');


gulp.task('step', function () {

    gulp.src('./js/script.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
})


gulp.task('step1', function () {

    pump([
        gulp.src('./js/script.js'),
        uglify(),
        gulp.dest('./dist')
    ])
})