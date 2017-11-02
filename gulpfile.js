//de javascript wordt uitgevoerd in strict modus.
//ongedeclareerde variablen mogen niet toegepast worden.
//dus declaratie is verplicht
'use strict';

//zo importeren we gulp en gulp sass via require omdat ze globaal geïnstalleerd zijn
//niet nodig om te linken in html
const gulp = require('gulp');
const gulp_sass = require('gulp-sass');

//nieuwe taak in automatisch proces integreren
gulp.task('sass', function() {
    console.log('TASK: transpile sass to css...');
    return gulp.src('./sass/main.scss')
    .pipe(gulp_sass().on('error', gulp_sass.logError))
    //resultaat van de compilatie waar komt dit terecht
    .pipe(gulp.dest('./css'));
});

// () is hetzelfde als function
//dit zijn arrow functions
gulp.task('watch', () => {
    return gulp.watch('./sass/main.scss', ['sass']);
});

//kijkt of er wijzigingen optreden in mijn bronbestanden
//zorgt voor automatische transpiling

