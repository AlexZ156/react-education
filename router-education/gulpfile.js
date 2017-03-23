'use strict';

const gulp = require('gulp');
const path = require('path');
const webpack = require('webpack');
const browserSync = require('browser-sync').create();
const webpackConfig = require('./webpack.config');
const historyApiFallback = require('connect-history-api-fallback');

const buildScripts = (function() {
	const delay = 500;
	let timer;

	return cb => {
		clearTimeout(timer);
		timer = setTimeout(() => webpack(webpackConfig, cb), delay);
	};
}());

const serve = (cb) => (
	browserSync.init({
		server: {
			baseDir: './dist/',
			middleware: [historyApiFallback()]
		},
		files: [path.resolve(__dirname, 'dist/**/*.*')]
	}, cb)
);

const watch = () => {
	gulp.watch(
		[path.resolve(__dirname, 'src/**/*.*')],
		buildScripts
	);
};

gulp.task(
	'default',
	gulp.series(
		buildScripts,
		serve,
		watch
	)
);
