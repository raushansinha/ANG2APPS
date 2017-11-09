const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');
const tslint = require('gulp-tslint');

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('dist/**/*');
});

// TypeScript compile
gulp.task('compile', ['clean'], function () {
  return gulp
  .src('app/**/*.ts')
  .pipe(sourcemaps.init())          // <--- sourcemaps
  .pipe(typescript(tscConfig.compilerOptions))
  .pipe(sourcemaps.write('.'))      // <--- sourcemaps
  .pipe(gulp.dest('dist/app'));
});

// copy dependencies
gulp.task('copy:libs', ['clean'], function() {
    return gulp.src([
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js',
        'systemjs.config.js'
      
      ])
      .pipe(gulp.dest('dist/lib'))
  });

  // copy static assets - i.e. non TypeScript compiled source
 gulp.task('copy:assets', ['clean'], function() {
    return gulp.src(['app/**/*', 'index.html', 'styles.css', '!app/**/*.ts'], { base : './' })
      .pipe(gulp.dest('dist'))
  });

  gulp.task('tslint', function() {
    return gulp.src('app/**/*.ts')
      .pipe(tslint())
      .pipe(tslint.report('verbose'));
  });

//gulp.task('build', ['tslint', 'compile', 'copy:libs', 'copy:assets']);
gulp.task('build', ['compile', 'copy:libs', 'copy:assets']);
gulp.task('default', ['build']);