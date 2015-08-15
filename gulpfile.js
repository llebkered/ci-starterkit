// Gulp & utilities
var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');

// CSS
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');

// Image
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var path = require('path');
var svgfallback = require('gulp-svgfallback');

// Javascript




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

/* ================= */
/* CSS Files */

// Compile SASS and Autoprefix.
gulp.task('sass', function() {
  gulp.src('assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
      cascade: true
    }))
    .pipe(csso())
    .pipe(gulp.dest('assets/css'));
});


/* ================= */
/* Images */

// Compress images
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

// Combine SVGs into 1 file
gulp.task('svgstore', function () {
    return gulp
        .src('assets/svgs/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore({ inlineSvg: true }))
        .pipe(gulp.dest('assets/build/svg'));
});

// Create PNG sprite sheet fallback
gulp.task('svgfallback', function () {
    return gulp
        .src('assets/svgs/*.svg', {base: 'assets/build/svg'})
        .pipe(svgfallback())
        .pipe(gulp.dest('assets/build/images/png'));
});


/* ================= */
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
gulp.task('default', ['sass', 'images' , 'svgstore', 'svgfallback','watch']);
