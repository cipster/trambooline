'use strict';

var path = require('path');
var gulp = require('gulp');
var pump = require('pump');
var uglify = require('gulp-uglify');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('scripts', function () {
    pump([gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe($.size()),
        uglify()
    ]);
});
