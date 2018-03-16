var path = ".";
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
//
gulp.task('default', ['sass'], function() {
    browserSync.init({
        server: "app"
    });

    gulp.watch(path + "/app/scss/**/*.scss", ['sass']);
    gulp.watch(path + "/app/index.html").on('change', function(){
        console.log("Reloading");
        browserSync.reload();
    });
});



//Task compile sass and minify
gulp.task('sass', function() {
    return gulp.src(path + "/app/scss/*.scss")
        .pipe(sass())
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path + "/app/css/"))
        .pipe(browserSync.stream());
});

