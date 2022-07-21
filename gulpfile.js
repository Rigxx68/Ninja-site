var gulp = require('gulp'); //подключаем Gulp к нашему проекту
const sass = require('gulp-sass')(require('sass')); //Подключаем Sass пакет

gulp.task('sass', function () { // Создаем таск "sass"
    return gulp.src('app/sass/**/*.scss') // Берем все scss файлы из папки sass и дочерних, если таковые будут
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('app/css')) // Выгружаем результаты в папку app/css
});

gulp.task('watch', function () {
    gulp.watch('app/sass/**/*.scss', gulp.parallel('sass')); // Наблюдение за sass файлами
});
gulp.task('default', gulp.parallel('sass', 'watch'/*, 'pug'*/));

