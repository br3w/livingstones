

// Load plugins
var gulp           =   require('gulp'),
    copy           =   require('copy'),
    http           =   require('http'),
    opn            =   require('opn'),
    es             =   require('event-stream'),
    connect        =   require('gulp-connect'),
    sass           =   require('gulp-ruby-sass'),
    sourcemaps     =   require('gulp-sourcemaps'),
    autoprefixer   =   require('gulp-autoprefixer'),
    cssnano        =   require('gulp-cssnano'),
    jshint         =   require('gulp-jshint'),
    uglify         =   require('gulp-uglify'),
    imagemin       =   require('gulp-imagemin'),
    rename         =   require('gulp-rename'),
    concat         =   require('gulp-concat'),
    notify         =   require('gulp-notify'),
    cache          =   require('gulp-cache'),
    livereload     =   require('gulp-livereload'),
    browserify     =   require('gulp-browserify'),
    refresh        =   require('gulp-refresh'),
    ecstatic       =   require('ecstatic'),
    lr             =   require('tiny-lr'),
    lrserver       =   lr(),
    webserver      =   require('gulp-webserver'),
    dependencies   =   require('gulp-html-dependencies'),
    del            =   require('del'),
    livereloadport =   35728,
    serverport     =   8000;




// Open browser
gulp.task('openbrowser', function() {
  opn( 'http://localhost:8000/#!/');
});

gulp.task('serve', function() {
    //Set up your static fileserver, which serves files in the build dir
    http.createServer(ecstatic({ root: __dirname + '/dist' })).listen(serverport);

    //Set up your livereload server
    lrserver.listen(livereloadport)
});


// Copy
gulp.task('copy', function() {
    gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts/'))

    gulp.src('app/svg/**/*')
        .pipe(gulp.dest('dist/svg/'))

    gulp.src('app/views/**/*')
        .pipe(gulp.dest('dist/views/'))

    gulp.src('app/data/**/*')
        .pipe(gulp.dest('dist/data/'))

    gulp.src('app/.htaccess')
        .pipe(gulp.dest('dist/'))

});

// Dependencias
gulp.task('dependencies', function() {
    return gulp.src('app/index.html')
        .pipe(dependencies({
            dest: 'dist',
            prefix: '/vendor',
        }))
        .pipe(gulp.dest('dist'));
});

// Styles
gulp.task('styles', function() {
  return sass('app/styles/main.scss', { style: 'expanded' })

    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/styles'))
});

// Vendor
gulp.task('vendor', function() {
  return gulp.src(
      [
        'node_modules/angular/angular.min.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-messages/angular-messages.min.js',
        'node_modules/angular-route/angular-route.min.js',
        'node_modules/angular-loader/angular-loader.min.js',
        'node_modules/angular-material/angular-material.min.js',
        'node_modules/angular-aria/angular-aria.min.js',
        'node_modules/angular-sanitize/angular-sanitize.min.js',

        'bower_components/ngMask/dist/ngMask.min.js',
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/jquery.pep/src/jquery.pep.js'
      ])
      .pipe(gulp.dest('./dist/vendor'));
});

// Scripts
gulp.task('scripts', function() {
    return es.concat(
        gulp.src('app/scripts/app.js')
            .pipe(rename({ suffix: '.min' }))
            .pipe(uglify())
            .pipe(gulp.dest('dist/scripts')),

        gulp.src('app/scripts/configs/**/*.js')
            .pipe(concat('config.js'))
            .pipe(rename({ suffix: '.min' }))
            .pipe(uglify())
            .pipe(gulp.dest('dist/scripts')),

        gulp.src('app/scripts/factorys/**/*.js')
            .pipe(concat('factory.js'))
            .pipe(rename({ suffix: '.min' }))
            .pipe(uglify())
            .pipe(gulp.dest('dist/scripts')),

        gulp.src('app/scripts/controllers/**/*.js')
            .pipe(concat('controller.js'))
            .pipe(rename({ suffix: '.min' }))
            .pipe(uglify())
            .pipe(gulp.dest('dist/scripts')),

        gulp.src('app/scripts/utils/**/*.js')
            .pipe(concat('utils.js'))
            .pipe(rename({ suffix: '.min' }))
            .pipe(uglify())
            .pipe(gulp.dest('dist/scripts')),

        gulp.src('app/scripts/directives/**/*.js')
            .pipe(concat('directive.js'))
            .pipe(rename({ suffix: '.min' }))
            .pipe(uglify())
            .pipe(gulp.dest('dist/scripts'))
        );
});

// Images
gulp.task('images', function() {
  return gulp.src('app/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'));
});

// Clean
gulp.task('clean', function() {
  return del('dist/');
});

// Default task
gulp.task('default', ['clean'], function() {
  gulp.start('serve','styles', 'scripts', 'vendor', 'images', 'dependencies', 'copy', 'watch','openbrowser');
});

// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('app/styles/**/*.scss', ['styles', ]);

  // Watch .js files
  gulp.watch('app/scripts/**/*.js', ['scripts']);

  // Watch image files
  gulp.watch('app/images/**/*', ['images']);

  // Watch html files
  gulp.watch('app/**/*', ['copy', 'dependencies']);

  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['dist/**']).on('change', livereload.changed);

});
