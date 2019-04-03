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


function browserSync(done) {
    browsersync.init({
        proxy: 'localhost:3000'
    });
    done();
}

function browserSyncReload(done) {
    browsersync.reload();
    done();
}

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

function imgMin() {
  return gulp
    .src('./assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./public/images'))
  };

  function fonts(){
    return gulp
      .src('./assets/fonts/*')
      .pipe(gulp.dest('./public/fonts'));
  }

exports.default = css;
exports.build = series(imgMin, fonts);