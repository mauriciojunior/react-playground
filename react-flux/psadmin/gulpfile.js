'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var fs = require('fs');

var config = {
	port: 9005,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/*.html',
		js: './src/**/*.js',
		images: './src/images/*',
		dist: './dist'
	}
};

gulp.task('connect', () => {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

gulp.task('open', ['connect'], () => {
	gulp.src('dist/index.html')
		.pipe(open({ uri: config.devBaseUrl + ':' + config.port }));
});

gulp.task('html', () => {
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

gulp.task('js', () => {
	browserify({ debug: true })
	  .transform(reactify)
	  .require("./src/main.js", { entry: true })
	  .bundle()
	  .on("error", function (err) { console.log("Error: " + err.message); })
	  .pipe(fs.createWriteStream("./dist/scripts/bundle.js"));
});

gulp.task('image', () => {
	gulp.src(config.paths.images)
		.pipe(gulp.dest(config.paths.dist + '/images'))
		.pipe(connect.reload())
});

gulp.task('watch', () => {
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js']);
});

gulp.task('default', ['html', 'js', 'image', 'open', 'watch']);