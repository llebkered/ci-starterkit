// Gulp & utilities
var browserSync = require('browser-sync').create();
var gulp = require('gulp');
// var gutil = require('gulp-util');
var watch = require('gulp-watch');


// CSS
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var sass = require('gulp-sass');

// Image
var imagemin = require('gulp-imagemin');
var path = require('path');
var pngquant = require('imagemin-pngquant');
var svgfallback = require('gulp-svgfallback');
var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');


// Javascript
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


// Browser Sync
var browserSync = require('browser-sync').create();


/* ================= */
/* CSS Files */

// Compile SASS and Autoprefix.
gulp.task('sass', function () {
    gulp.src('assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
            cascade: true
        }))
        // Minify CSS
        .pipe(csso())
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.stream());
});



/* ================= */
/* Javascript */
// Combine and minify Javascript

//script paths
var jsFiles = 'assets/scripts/**/*.js',
    jsDest = 'assets/build/js';

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});



/* ================= */
/* Images */

// Compress images
gulp.task('images', function () {
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
            };
        }))
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(gulp.dest('assets/build/svg'));
});

// Create PNG sprite sheet fallback
gulp.task('svgfallback', function () {
    return gulp
        .src('assets/svgs/*.svg', {
            base: 'assets/build/svg'
        })
        .pipe(svgfallback())
        .pipe(gulp.dest('assets/build/images/png'));
});



// Copy files
// modify this to copy required files from node_modules to assets
gulp.task('copyfiles', function () {
    gulp.src('./source_directory/**/*.*')
        .pipe(gulp.dest('./destination_directory'));
});

// Browser Sync
// see https://www.browsersync.io/docs/gulp/
gulp.task('browser-sync', function () {
    browserSync.init({
        proxy: "ci-starterkit.dev"
    });
});

/* ================= */
/* Gulp Watch */

gulp.task('watch', function () {
    // watch scss files
    gulp.watch('assets/sass/**/*.scss', ['sass']);
    // watch image files
    gulp.watch('assets/images/**/*', ['images']);

});


/*gulp.task('default', function() {
  // place code for your default task here
});
*/
gulp.task('default', ['sass', 'images', 'svgstore', 'svgfallback', 'browser-sync', 'watch']);
