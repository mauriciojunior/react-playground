'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');
const open = require('gulp-open');
const browserify = require('browserify');
const reactify = require('reactify');
const source = require('vinyl-source-stream');
const babelify = require("babelify");

const config = {
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
	browserify('./src/main.js')
		.transform(babelify, {presets: ['es2015', 'react']})
	  .bundle()
	  .on("error", function (err) { console.log("Error: " + err.message); })
	  .pipe(source('bundle.js'))
	  .pipe(gulp.dest(config.paths.dist + '/scripts/'))
	  .pipe(connect.reload());
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