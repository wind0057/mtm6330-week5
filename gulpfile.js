// Declare global scope variables.
const gulp = require('gulp')      // load the gulp library
const sass = require('gulp-sass') // load the gulp-sass compiler library
const sassPath = 'scss/**/*.scss' // the folder(s) with our Sass source files
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

// Define a new task called 'sass' that we can call to compile Sass to CSS
gulp.task('sass', function () {

  const plugins = [
    autoprefixer({ browsers: ['last 2 versions']}),
    cssnano()
  ]

  return gulp
    .src(sassPath)          // where to find the Sass source files (use our variable)
    .pipe(sass())           // forward those files to the compiler
    .pipe(postcss(plugins)) // apply the postcss plugin
    .pipe(gulp.dest('css')) // where to output the comipled CSS files
})

// Define a new default task (so we can just call 'gulp' on the command line)
// to automatically compile when we save changes to our Sass files
gulp.task('default', function () {
  gulp.watch(
    sassPath, // which files to watch for changes (use our variable)
    ['sass']) // an array of tasks to run when changes are detected.
})
