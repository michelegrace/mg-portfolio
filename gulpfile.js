'use strict';
 
var gulp = require('gulp');
var series = require('gulp').series;
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var browsersync = require('browser-sync').create();

sass.compiler = require('node-sass');

function reload() {
  browsersync.reload();
}

function sync() {
  browsersync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./assets/styles/**/*.scss", css);
  gulp.watch('./assets/js/*.js', js);
  gulp.watch("index.html").on('change', reload);
};


function css(){
  return gulp
    .src("./assets/styles/*.scss")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(concat('main.css'))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./public/css/"))
    .pipe(browsersync.stream());
};

function js(){
  return gulp
  .src(['./assets/js/*.js'])
  .pipe(plumber())
  .pipe(concat('all.js'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./public/js'))
  .pipe(browsersync.stream());
}

function thirdParty(){
  return gulp
  .src('./assets/third_party/animejs/lib/anime.min.js')
  .pipe(plumber())
  .pipe(gulp.dest('./public/third_party'))
  .pipe(browsersync.stream());
}

function imgMin() {
  return gulp
    .src('./assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./public/images'))
    .pipe(browsersync.stream());
  };

  function fonts(){
    return gulp
      .src('./assets/fonts/*')
      .pipe(gulp.dest('./public/fonts'))
      .pipe(browsersync.stream());
  }

exports.default = series(css, js);
exports.watch = gulp.parallel(css, js, sync);
exports.build = series(imgMin, fonts, thirdParty);