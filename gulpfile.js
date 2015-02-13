var gulp = require('gulp')
  , Constants = require('./constants.json')
  , minimist = require('minimist')
  , _ = require('underscore')
  , watch = require('gulp-watch')
  , clean = require('gulp-clean')
  , path = require('path')
  , aglio = require('gulp-aglio')
  , options;

options = {
  docs: 'parts'
, dest: 'dest'
, redbooth_theme: path.resolve(__dirname, 'aglio-theme', 'redbooth.jade')
};

/**
 * Return the context in wich gulp is executed
 *
 * @return {String}
 */
function getEnviroment () {
  args = getEnviromentVariables()
    , available_envs = ['development', 'production'];

  if (args.env && _.indexOf(available_envs, args.env) != -1 ) {
    return args.env;
  }

  return 'development';
}

/**
 * Check parametres in the gulp call
 *
 * @return {Object}
 */
function getEnviromentVariables () {
  return minimist(process.argv.slice(2));
}

/**
 * Get theme local variables by enviroment
 *
 * @param {String} enviroment
 * @return {Object}
 */
function getThemeLocals (enviroment) {
  return Constants[enviroment]
}

gulp.task('clean', function () {
  return gulp.src(options.dest, {read: false})
      .pipe(clean());
});

gulp.task('generate_docs', function () {
  var wached_files = options.docs + '/*.md'
    , env = getEnviroment();

  console.log(getThemeLocals(env));
  return gulp.src(wached_files)
    .pipe(watch(wached_files))
    .pipe(aglio({
      template: options.redbooth_theme
    , locals: getThemeLocals(env)
    }))
    .pipe(gulp.dest(options.dest));
});

// Default Task
gulp.task('default', ['clean', 'generate_docs']);
