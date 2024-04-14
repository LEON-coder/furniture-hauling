const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require('gulp-sass')(require('sass'));
const plumber = require("gulp-plumber");
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const { stream } = require("browser-sync");
const browserSync = require('browser-sync').create();
const imagemin = require("gulp-imagemin");
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const ttf2woff2 = require('gulp-ttf2woff2');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');



function convertWoff2() {
    return gulp.src(["./src/fonts/**/*.ttf"])
        .pipe(ttf2woff2())
        .pipe(gulp.dest('./build/fonts/'))
        .pipe(browserSync.stream());
}


function compilePug() {
    return gulp.src("./src/pug/**/*.pug")
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
}



function CSScompiling() {
    return gulp.src("./src/scss/**/*.scss")
        .pipe(cleanCSS())
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({ pretty: true }).on("error",sass.logError))
        .pipe(plumber.stop())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.stream());
}


function script() {
    return gulp.src("src/js/**/*.js")
        // .pipe(babel({
        //     presets: ['@babel/env']
        // }))
        .pipe(uglify())
        .pipe(browserSync.stream())
        .pipe(gulp.dest('build/js'));
}


function liveserver() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}


function imageCompressing() {
    return gulp.src([
        "./build/img/",
        "!src/images/sprites/**/*"])
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img/'));
}





function watcher() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/pug/**/*.pug',compilePug);
    gulp.watch('./src/js/main.js',script);
    gulp.watch('./src/scss/**/*scss',CSScompiling);
    gulp.watch('./build/*.html').on('change',browserSync.reload);
    gulp.watch('./src/img/**', imageCompressing);
    gulp.watch('./src/js',script);
    gulp.watch('./src/fonts',convertWoff2);
}


exports.default = gulp.parallel(compilePug,CSScompiling,watcher,convertWoff2,imageCompressing);