var browserify = require('browserify');
var gulp       = require('gulp');
var uglify     = require('gulp-uglify');
var source     = require('vinyl-source-stream');

gulp.task('browserify', function() {
  return browserify('./index.js', {'standalone': 'hitokotonushi'})
        .bundle()
        .pipe(source('hitokotonushi.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('minify', function() {
  return gulp.src('./dist/*.js')
             .pipe(uglify())
             .pipe(gulp.dest('./dist/'));
});
