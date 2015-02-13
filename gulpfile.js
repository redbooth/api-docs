var gulp = require('gulp')
  , glob = require("glob")
  , webserver = require('gulp-webserver')
  , Constants = require('./constants.json')
  , minimist = require('minimist')
  , _ = require('underscore')
  , underscore_string = require('underscore.string')
  , watch = require('gulp-watch')
  , clean = require('gulp-clean')
  , path = require('path')
  , aglio = require('gulp-aglio')
  , options;

_.mixin(underscore_string.exports());

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
 * From parts folder get the file names with .html extension
 *
 * @return {Array}
 */
function getDocSections (folder) {
  return _.compact(_.map(glob.sync(folder), function (file) {
    var name = file.replace(/parts\/([^\.]*)\.(md)/i, "$1");

    if (name === 'index') {
      return;
    };

    return {
      url: file.replace(/parts\/([^\.]*)\.(md)/i, "\/$1\.html")
    , name: _.capitalize(name.replace(/_/i, ' '))
    };
  }));
}

/**
 * Get theme local variables by enviroment
 *
 * @param {String} enviroment
 * @return {Object}
 */
function getThemeLocals (enviroment) {
  var doc_sections = getDocSections(options.docs + '/*.md');
  return _.extend(Constants[enviroment], {
    doc_sections: doc_sections
  })
}

gulp.task('clean', function () {
  return gulp.src(options.dest, {read: false})
      .pipe(clean());
});

gulp.task('generate_docs', function () {
  var wached_files = options.docs + '/*.md'
    , env = getEnviroment();
  return gulp.src(wached_files)
    .pipe(watch(wached_files))
    .pipe(aglio({
      template: options.redbooth_theme
    , locals: getThemeLocals(env)
    }))
    .pipe(gulp.dest(options.dest));
});

gulp.task('webserver', function() {
  gulp.src(options.dest)
    .pipe(webserver({
      livereload: true
    , directoryListing: false
    , open: false
    , port: 8080
    , fallback: 'index.html'
    }));
});

// Default Task
gulp.task('default', ['clean', 'generate_docs', 'webserver']);
