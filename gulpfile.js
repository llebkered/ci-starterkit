var gulp = require('gulp');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
  // place code for your default task here
});


/*
CSS
Compile sass
add browser prefix
minify

Images
minify images
combine svg
make png backup files
make sprite sheet

JS
concat JS
minify JS

web
Live reload

*/


/* CSS Files */

gulp.task('sass', function () {
  gulp.src('assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
        cascade: false
        }))
    .pipe(gulp.dest('assets/css'));
});
