'use strict';

var gulp = require('gulp');
var path = require('path');
var yargs = require('yargs');
var conf = require('./conf');
var template = require('gulp-template');
var rename = require('gulp-rename');
var _ = require('lodash');
var normalize = require('normalize-path');

gulp.task('component', function () {
    function cap(val) {
        return val.charAt(0).toUpperCase() + val.slice(1);
    }

    var name = yargs.argv.name;
    var componentPath = conf.paths.components;
    var parentPath = yargs.argv.parent || '';

    var destPath = path.join(componentPath, parentPath, name);

    function buildParentPath() {
        if (parentPath) {
            return (parentPath.endsWith('/')) ? parentPath : parentPath + '/';
        }
        return '';
    }

    return gulp.src(conf.paths.blankTemplates)
        .pipe(template({
            name: name,
            kebabCaseName: _.kebabCase(name),
            upCaseName: cap(name),
            parentPath: buildParentPath()
        }))
        .pipe(rename(function (path) {
            path.basename = path.basename.replace('temp', name);
        }))
        .pipe(gulp.dest(destPath));
});
