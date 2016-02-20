var gulp = require('gulp');
// Rather than have to specify each gulp plugin, gulp-load-plugins will search your packages.json file and automatically include them
var $ = require('gulp-load-plugins')();
// var http = require('http');
// var connect = require('connect');
// var serveStatic = require('serve-static');
var selenium = require('selenium-standalone');
var webdriver = require('gulp-webdriver');


// tests
//------

var httpServer, seleniumServer;

// gulp.task('http', (done) => {
//   let app = connect().use(serveStatic('test/fixtures'));
//   httpServer = http.createServer(app).listen(9000, done);
// });

gulp.task('selenium', function(done) {
  selenium.install({logger: console.log}, function() {
    selenium.start(function(err, child) {
      if (err) { return done(err); }
      seleniumServer = child;
      done();
    });
  });
});


gulp.task('e2e', ['selenium'], function() {
  return gulp.src('wdio.conf.js')
    .pipe(webdriver()).on('error', function() {
      seleniumServer.kill();
      process.exit(1);
    });
});

gulp.task('test', ['e2e'], function() {
  //httpServer.close();
  seleniumServer.kill();
});
