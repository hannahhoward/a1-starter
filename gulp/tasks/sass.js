var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').sass;
var autoprefixer = require('gulp-autoprefixer');
var merge        = require('merge-stream');
var concat       = require('gulp-concat');

gulp.task('sass', function () {
  var sassOut = gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(sass(config.settings))
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({ browsers: ['last 2 version'] }));

  var vendorCss = gulp.src(config.vendorSrc)

  merge(vendorCss, sassOut)
    .pipe(concat(config.out))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
