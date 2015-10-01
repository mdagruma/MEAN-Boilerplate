var gulp = require('gulp');
var concat = require('gulp-concat');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var rename = require('gulp-rename');

gulp.task('default', ['templates', 'js', 'css'], function() {
  // place code for your default task here
  console.log('gulp process completed');
});

gulp.task('templates', function() {
  // convert jade files to html
  var YOUR_LOCALS = {};

  gulp.src('src/client/angular/**/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('dist/templates'))
});

gulp.task('js', function() {
  //compile js file assets into one minimized file
  gulp.src('src/client/angular/**/*.js')
    .pipe(concat('script.min.js'))
    .pipe(gulp.dest('dist/js'));

  gulp.src('src/client/libs/**/*.js')
    .pipe(gulp.dest('dist/libs'));
});

gulp.task('css', function() {
  //compile stylus file assets into one minimized css file
  gulp.src('src/client/css/**/*.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('dist/css'));
});