var gulp = require('gulp');
var rev = require('gulp-rev');
var revcollector = require('gulp-rev-collector');

// step1
// gulp.task('step1', function (){
//     return gulp.src('./src/js/script.js')
//         .pipe(rev())
//         .pipe(gulp.dest('build'))
// })

// gulp.task('step2', function (){
//     return gulp.src('./src/js/script.js')
//         .pipe(rev())
//         .pipe(rev.manifest())
//         .pipe(gulp.dest('build'))
// })

// step3
gulp.task('rev', function (){
    return gulp.src('./src/js/script.js')
        .pipe(rev())
        .pipe(gulp.dest('build'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('config'))
});
gulp.task('step3', ['rev'], function (){
    return gulp.src(['./index.html', 'config/*.json'])
        .pipe(revcollector({
            replaceReved: true,
            dirReplacements: {
                './src/js/': ''
            }
        }))
        .pipe(gulp.dest('build'))
})

