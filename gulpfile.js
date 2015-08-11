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
  , sass = require('gulp-sass')
  , concat = require('gulp-concat')
  , gulpif = require('gulp-if')
  , uglify = require('gulp-uglify')
  , JadeHelpers = require('./redbooth-theme/helpers/base.js')
  , env
  , options;

_.mixin(underscore_string.exports());

env = getEnviroment();

options = {
  docs: 'parts'
, dest: 'dest'
, stylesheets: 'redbooth-theme/assets/stylesheets/**/*.scss'
, javascripts: 'redbooth-theme/assets/javascripts/**/*.js'
, jades: 'redbooth-theme/**/*.jade'
, images: Constants[env].root_url + 'assets/images'
, src_images: 'redbooth-theme/assets/images/**/*'
, redbooth_theme: path.resolve(__dirname, 'redbooth-theme', 'redbooth.jade')
};

/**
 * Return the context in wich gulp is executed
 *
 * @return {String}
 */
function getEnviroment () {
  var args = getEnviromentVariables()
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
    var raw_name = file.replace(/parts\/([^\.]*)\.(md)/i, "$1");
    raw_name = raw_name.replace(/_/i, ' ');

    if (raw_name === 'index') {
      return;
    };

    return {
      url: file.replace(/parts\/([^\.]*)\.(md)/i, "\/$1\.html")
    , raw_name: raw_name
    , name: _.capitalize(raw_name)
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
  , _: _
  , env: enviroment
  , custom_helpers: JadeHelpers
  });
}

gulp.task('clean', function () {
  return gulp.src([options.dest], {read: false})
    .pipe(clean({force: true}));
});

gulp.task('sass', ['clean'], function () {
  return gulp.src(options.stylesheets)
    .pipe(watch(options.stylesheets))
    .pipe(sass({
      imagePath: options.images
    }))
    .pipe(gulp.dest(options.dest + '/assets/css'));
});

gulp.task('copy_images', ['clean'], function () {
  return gulp.src(options.src_images)
    .pipe(watch(options.src_images))
    .pipe(gulp.dest(options.dest + '/assets/images'));
});

gulp.task('javascripts', ['clean'], function () {
  var is_production = getEnviroment() === 'production' ? true : false;

  return gulp.src(options.javascripts)
    .pipe(gulpif(is_production, concat('main.js')))
    .pipe(gulpif(is_production, uglify()))
    .pipe(gulp.dest(options.dest + '/assets/javascripts'));
});

gulp.task('generate_docs', ['clean'], function () {
  var wached_files = [options.docs + '/*.md']
    , env = getEnviroment();

  // NOTE: If you see some error like this:
  // (CarbonCore.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-21)
  // is because the watcher is checking too much files. It could be you have another
  // project with a watcher running. Try to stop the other project.
  return gulp.src(wached_files)
    .pipe(watch(wached_files))
    .pipe(aglio({
      template: options.redbooth_theme
    , locals: getThemeLocals(env)
    }))
    .pipe(gulp.dest(options.dest));
});

gulp.task('webserver', function() {
  return gulp.src(options.dest)
    .pipe(webserver({
      livereload: true
    , directoryListing: false
    , open: false
    , port: 8080
    , fallback: 'index.html'
    }));
});

// Shared tasks bettwen production and development
gulp.task('common', ['copy_images', 'javascripts', 'sass', 'generate_docs']);

// Development
gulp.task('default', ['common', 'webserver']);

// Compile for production
// FIXME: Assets fingerprint pending
gulp.task('build-production', ['common']);
