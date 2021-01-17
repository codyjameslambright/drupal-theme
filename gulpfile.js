var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var sass = require('gulp-sass');

gulp.task('uglify', function() {
    return gulp
        .src('./themes/cody_james_theme/lib/*.js')
        .pipe(uglify('main.js'))
        .pipe(gulp.dest('./themes/cody_james_theme/js'))
});
  
gulp.task('sass', function() {
    return gulp
        .src('./themes/cody_james_theme/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./themes/cody_james_theme/css'))
});

gulp.task('default', gulp.parallel(
    'sass',
    'uglify'
));
