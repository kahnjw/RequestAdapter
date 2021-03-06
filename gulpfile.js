'use strict';

var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var size = require('gulp-size');
var shell = require('gulp-shell');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');

gulp.task('footprint', function() {
   return browserify('./src/index', {list: true})
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(streamify(uglify()))
      .pipe(streamify(size()))
      .pipe(shell(
        'browserify-graph src/index.js'
      ));
});

gulp.task('xhrspec', function() {
  gulp.src('')
    .pipe(shell(['karma start']));
});


gulp.task('nodespec', function() {
  return gulp.src('test/node-request-spec/*-spec.js')
    .pipe(mocha({reporter: 'spec'}))
    .once('end', process.exit);
});

gulp.task('lint', function() {
  var files = ['src/**/*.js', 'test/**/*.js', 'gulpfile.js', 'karma.conf.js'];
  return gulp.src(files)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
