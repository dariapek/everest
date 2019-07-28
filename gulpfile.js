"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csscomb = require('gulp-csscomb');
var imagemin = require("gulp-imagemin");
var server = require("browser-sync").create();
var del = require("del");

gulp.task("css", function() {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(csscomb())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

// npx gulp images

gulp.task("images", function() {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({
        optimizationLevel: 3
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"));
});

gulp.task("clean", function() {
  return del("/build");
});

gulp.task("copy", function() {
  return gulp.src([
      "source/fonts/**/*.{woff,woff2}",
      "source/img/**",
      "source/js/**",
      "source/*.html"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
});

// gulp.task("html", function () {
//   return gulp.src("source/*.html")
//     .pipe(gulp.dest("build"));
// });

gulp.task("server", function() {
  server.init({
    server: "build/"
  });

  gulp.watch("source/js/*.js").on("change", gulp.series("clean", "copy", "refresh"));
  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
  gulp.watch("source/*.html").on("change", gulp.series("clean", "copy", "refresh"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("build", gulp.series("clean", "copy", "css"));
gulp.task("start", gulp.series("clean", "copy", "css", "server"));
