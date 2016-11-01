//gulp build setup example. sass to css compiler, sass watch, autoprefixer, browser sync.

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('styles', function () {
  gulp.src('./sass/main.sass')
   .pipe(sass({
     outputStyle: 'extended'
   }))
   .pipe(autoprefixer({
     versions: ['last 2 browsers']
   }))
   .pipe(gulp.dest('./css'))
   .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })

gulp.watch('./sass/*.sass', ['styles']);
gulp.watch('./**/*.html').on('change', browserSync.reload);

});

gulp.task('default', ['styles', 'serve']);
