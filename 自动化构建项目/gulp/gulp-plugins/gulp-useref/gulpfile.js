var gulp = require('gulp');
var useref = require('gulp-useref');

gulp.task ('default', function (){
    gulp.src('*.html')
        .pipe(useref())
        .pipe(gulp.dest('build'))
})