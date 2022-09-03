const gulp = require('gulp'); //подключаем Gulp к нашему проекту
const sass = require('gulp-sass')(require('sass')); //Подключаем Sass пакет
const browserSync = require('browser-sync').create(); // Подключаем Browser Sync

gulp.task('browser-sync', function () { // Создаем таск browser-sync
    browserSync.init({
        server: {
            baseDir: ["../Ninja-site/app", '../Ninja-site'],
            index: "Ninja.html",
        },

    });
});

gulp.task('code', function () { //обработка хтмл
    return gulp.src('app/**/*.html')
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('sass', function () { // Создаем таск "sass"
    return gulp.src('app/sass/**/*.scss') // Берем все scss файлы из папки sass и дочерних, если таковые будут
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('app/css')) // Выгружаем результаты в папку app/css
        .pipe(browserSync.reload({ stream: true })) // Обновляем CSS на странице при изменени
});

gulp.task('watch', function () {
    gulp.watch('app/sass/**/*.scss', gulp.parallel('sass')); // Наблюдение за sass файлами
    gulp.watch('app/**/*.html', gulp.parallel('code')); // Наблюдение за HTML файлами 
});
gulp.task('default', gulp.parallel('browser-sync', 'code', 'sass', 'watch'));

