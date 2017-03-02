var browserify = require('browserify');
var gulp       = require('gulp');
var source     = require('vinyl-source-stream');

gulp.task('browserify', function () {
  return browserify('./index.js', {'standalone': 'hitokotonushi'})
           .bundle()
           .pipe(source('hitokotonushi.js'))
           .pipe(gulp.dest('./dist/'));
});
