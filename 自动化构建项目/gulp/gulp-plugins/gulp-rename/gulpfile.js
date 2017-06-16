var gulp = require('gulp'),
    rename = require('gulp-rename');

gulp.task('step', function (){

    gulp.src('./src/index.html')
        .pipe(rename('index.re.html'))
        .pipe(gulp.dest('dist'))
})

gulp.task('step1', function (){

    gulp.src('./src/index.html')
        .pipe(rename('./step1/index.re1.html'))
        .pipe(gulp.dest('dist'))
})

gulp.task('step2', function (){

    gulp.src('./src/index.html')
        .pipe(rename(function (path) {
            path.dirname += './dist/step2';
            path.basename += '-step2';
            path.extname = '.js'
        }))
        .pipe(gulp.dest('dist'))
})

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

gulp.task('step3-1', function (){

    gulp.src('./src/index.html', {base: './'})
        .pipe(rename({
            dirname: './dist/step3-1',
            basename: 'index',
            prefix: 'gulp-',
            suffix: '-step3-1',
            extname: '.js'
        }))
        .pipe(gulp.dest('dist'))
});