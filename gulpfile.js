var path = require('path');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var svgSymbols = require('gulp-svg-symbols');
var connect = require('gulp-connect');

var customCSSTemplate = path.join(__dirname, './icons.styl');

var renameFunction = function() {};

gulp.task('connect', function() {
    connect.server({
        root: 'outs',
        port: 2222,
        livereload: true
    });
});

gulp.task('sprites', function() {
    return gulp.src('./svgs/*.svg')
        // .pipe(rename(renameFunction))
        .pipe(svgSymbols({
            id: '%f',
            className: '.%f',
            fontSize: 0,
            warn: true,
            title: false,
            templates: [
                path.join(__dirname, './templates/svg-icons.svg'),
                path.join(__dirname, './templates/svg-icons.css'),
                path.join(__dirname, './templates/svg-icons.html')
            ],
            transformData: function(svg, defaultData, options) {
                return defaultData;
            }
        }))
        // .pipe(rename(outputFilesRenameFunction))
        .pipe(gulp.dest('./outs/'))
        .pipe(connect.reload());
});

gulp.task('default', ['connect', 'sprites']);