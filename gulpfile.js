var gulp = require('gulp');
// var pug = require('gulp-pug');
// var less = require('gulp-less');
// var minifyCSS = require('gulp-csso');
var tailwindcss = require('tailwindcss');
var postcss = require('gulp-postcss');


// gulp.task('html', function(){
//   return gulp.src('client/templates/*.pug')
//     .pipe(pug())
//     .pipe(gulp.dest('build/html'))
// });

gulp.task('css', function(){
  return gulp.src('src/css/styles.css')
    // .pipe(less())
    // .pipe(minifyCSS())
    .pipe(postcss([
      tailwindcss('tailwind.js'),
      require('autoprefixer'),
    ]))
    .pipe(gulp.dest('public/css'))
});

// gulp.task('default', [ 'html', 'css' ]);

