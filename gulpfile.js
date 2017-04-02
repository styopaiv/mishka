'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const server = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const mqpacker = require('css-mqpacker');
const imagemin = require('gulp-imagemin');
const minify = require('gulp-csso');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const runSequence = require('run-sequence');
const del = require('del');

gulp.task('style', () => {
  gulp.src('sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({
        browsers: [
          'last 2 versions'
        ]
      }),
      mqpacker({
        sort: true
      })
    ]))
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/css'))
    .pipe(server.stream())
    .pipe(minify())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css'));
});


gulp.task('images', () => {
  return gulp.src('build/img/**/*.{png,jpg,gif}')
    .pipe(imagemin([
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 3
      })
    ]))
    .pipe(gulp.dest('build/img'));
});

gulp.task('copy', () => {
  return gulp.src([
      'fonts/**/*.{woff,woff2}',
      'img/**',
      'js/**',
      '*.html'
    ], {
      base: '.'
    })
    .pipe(gulp.dest('build'));
});

gulp.task('clean', () => {
  return del('build');
});

gulp.task('build', (callback) => {
  runSequence('clean',
    'copy',
    'style',
    'images',
    callback);
});

gulp.task('html:copy', () => {
  return gulp.src('*.html')
    .pipe(gulp.dest('build'));
});
gulp.task('html:update', ['html:copy'], (done) => {
  server.reload();
  done();
});

gulp.task('serve', () => {
  server.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  gulp.watch('sass/**/*.{scss,sass}', ['style']);
  gulp.watch('*.html', ['html:update']);
});
