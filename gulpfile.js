'use strict';

const
    gulp = require('gulp'),
    zip  = require('gulp-zip');

gulp.task('default', () =>
    gulp.src('theme.css')
        .pipe(zip('brackets-dracula.zip'))
        .pipe(gulp.dest('dist'))
);