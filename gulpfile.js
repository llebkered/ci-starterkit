var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');




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

gulp.task('sass', function() {
  gulp.src('assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
      cascade: true
    }))
    .pipe(gulp.dest('assets/css'));
});

/* Images */

gulp.task('images', function() {
  return gulp.src('assets/images/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('assets/build/images'));
});

/* Gulp Watch */

gulp.task('watch', function() {
  // watch scss files
  gulp.watch('assets/sass/**/*.scss', ['sass']);
  // watch image files
  gulp.watch('assets/images/**/*', ['images']);

});


/*gulp.task('default', function() {
  // place code for your default task here
});
*/
gulp.task('default', ['sass', 'images', 'watch']);
