const gulp        = require('gulp');
const browserSync = require('browser-sync');
const autoPrefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');


// Static server
gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: "src/"
        }
    });
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch("src/script/*.js").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/sass/*.+(scss|sass)")
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({suffix: '.min', prefix: ''}))
    .pipe(autoPrefixer())
    .pipe(cleanCSS({compability: 'ie8'}))
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('styles'))
});

gulp.task('default', gulp.parallel('styles', 'watch', 'server'));