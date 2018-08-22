(function() {

    var gulp = require('gulp'),
        sourcemaps = require('gulp-sourcemaps'),
        browserify = require('browserify'),
        strictify = require('strictify'),
        sass = require('gulp-sass'),
        del = require('del'),
        ngHtml2Js = require('gulp-ng-html2js'),
        minifyHtml = require('gulp-minify-html'),
        uglify = require('gulp-uglify'),
        concat = require('gulp-concat'),
        stylus = require('gulp-stylus'),
        autoprefixer = require('gulp-autoprefixer'),
        source = require('vinyl-source-stream'),
        buffer = require('vinyl-buffer');

    gulp.task('clean', function() {
        return del('build');
    });

    gulp.task('build:html', function() {
        return gulp.src('src/**/*.html')
            .pipe(minifyHtml({
                empty: true,
                spare: true,
                quotes: true
            }))
            .pipe(ngHtml2Js({
                moduleName: 'app',
                rename: function(url) {
                    return url.replace('src/', '');
                }
            }))
            .pipe(concat("templates-nordstar.js"))
            .pipe(uglify())
            .pipe(gulp.dest('build/'));
    });

    gulp.task('build:css', function(){
        return gulp.src('src/css/**/*.sass')
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: ['last 5 versions'],
                cascade: false
            }))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('build/index.css/'));
    });


    gulp.task('watch', function() {
        gulp.watch('src/**/*.*', gulp.series('build:html', 'build:css'));
    });

    gulp.task('build', gulp.series('build:html', 'build:css'));

    gulp.task('default', gulp.series('build', 'watch'));

}());
