const gulp = require('gulp');
const gNotify = require('gulp-notify');
const gPlumber = require('gulp-plumber');
const gJsbeautifier = require('gulp-jsbeautifier');
const gHtmllint = require('gulp-htmllint');

const errorHandler = (err) => {
  gNotify.onError({
    title: `Gulp error in ${err.plugin}`,
    message: err.toString(),
  })(err);
};

const pretty = () => gulp.src('./source/*.html')
  .pipe(gPlumber({ errorHandler }))
  .pipe(gJsbeautifier({
    indent_size: 2,
    indent_char: " ",
    indent_with_tabs: false,
    eol: '\n',
    end_with_newline: true,
    inline: [],
  }))
  .pipe(gHtmllint())
  .pipe(gulp.dest('./'));

exports.pretty = pretty;

exports.default = gulp.series(pretty);
