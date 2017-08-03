const gulp = require('gulp');
const sass = require('gulp-sass');
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const to5 = require('gulp-6to5'); //convert ECMA6 to 5
const concat = require('gulp-concat'); //despues de convertir vuelve a min
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

const config = {
  source: './src/',
  dist: './dist/'
};
const paths = {
  assets: 'assets/',
  html: '**/*.html',
  sass: 'scss/**/*.scss',
  js: 'js/**/*.js',
  mainSass: 'scss/main.scss',
  mainJS: 'js/**/*.js',
  img: 'img/**'
};
const sources = {
  assets: config.source + paths.assets,
  html: config.source + paths.html,
  sass: config.source + paths.assets + paths.sass,
  js: config.source + paths.assets + paths.js,
  rootSass: config.source + paths.assets + paths.mainSass,
  rootJS: config.source + paths.assets + paths.mainJS,
  img: config.source + paths.assets + paths.img
};

gulp.task('html', ()=> {
  gulp.src(sources.html).pipe(gulp.dest(config.dist));
});

gulp.task('img', ()=> {
  gulp.src(sources.img).pipe(gulp.dest(config.dist+ paths.assets + "img"));
});

gulp.task('sass', ()=> {
  gulp.src(sources.rootSass)
    .pipe(sass({
      outStyle: "compressed"
    }).on("error", sass.logError))
    .pipe(gulp.dest(config.dist + paths.assets + "css"))
});

gulp.task('js', ()=> {
   gulp.src(sources.rootJS)
      .pipe(plumber())
      .pipe(to5())
      .pipe(concat("app.js"))
      .pipe(uglify())
      .pipe(gulp.dest(config.dist + paths.assets + "js"))
});

gulp.task("sass-watch", ["sass"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("js-watch", ["js"], function (done) {
  browserSync.reload();
  done();
});

gulp.task('html-watch', ["html"], function (done) {
  browserSync.reload();
  done();
});

gulp.task('img-watch', ["img"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("serve", function () {
  browserSync.init({
    port:3007,  
    server: {
      baseDir: config.dist
    }
  });
  gulp.watch(sources.sass, ['sass']);
  gulp.watch(sources.js, ['js']);
  gulp.watch(sources.html, ['img-watch']);
  gulp.watch(sources.html, ['html-watch']);
});