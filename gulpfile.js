var gulp = require('gulp');
// var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minifyCss = require("gulp-minify-css");
var sass = require("gulp-sass");
var Server = require('karma').Server;


// task minify css
gulp.task('minify-css', function () {
    gulp.src('./css/app.css') // path to css
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist/css')); // path to output
});

// task minify js
gulp.task('minify-js', function () {
    gulp.src('./js/app.js') // path to your files
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});


// task compile sass
gulp.task('compile-sass', function () {
    gulp.src('./sass/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/sass'));
});

//watch sass
gulp.task('watch-sass', function () {
    gulp.watch(['./sass/*.scss'], ['compile-sass']);
});

//watch for karma
gulp.task('watch-karma', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});


//gulp.task("default", gulp.parallel(files));
gulp.task("default", ["minify-css", "minify-js", "watch-sass", "compile-sass", "watch-karma"]);


