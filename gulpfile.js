'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');

gulp.task('default', function() {
	// place code for your default task here
});


gulp.task('sass', function () {
	gulp.src('./sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concatCss("bundle.css"))
		.pipe(gulp.dest('./build'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./sass/**/*.scss', ['sass']);
});
