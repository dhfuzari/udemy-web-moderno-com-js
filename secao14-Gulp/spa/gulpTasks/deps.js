const gulp = require('gulp');

gulp.task('deps', ['deps.css', 'deps.fonts',], () => {

});

gulp.task('deps.css', () => {
  setTimeout(() => { console.log('deps.CSS after 3000ms') }, 3000);
});

gulp.task('deps.fonts', () => {
  setTimeout(() => { console.log('deps.FONTS after 3000ms') }, 3000);
});
