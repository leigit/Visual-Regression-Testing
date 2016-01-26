var gulp = require('gulp');
// Rather than have to specify each gulp plugin, gulp-load-plugins will search your packages.json file and automatically include them
var $ = require('gulp-load-plugins')();
var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static');
var selenium = require('selenium-standalone');
var webdriver = require('gulp-webdriver');


// tests
//------

let httpServer, seleniumServer;

gulp.task('http', (done) => {
  let app = connect().use(serveStatic('test/fixtures'));
  httpServer = http.createServer(app).listen(9000, done);
});

gulp.task('selenium', (done) => {
  selenium.install({logger: console.log}, () => {
    selenium.start((err, child) => {
      if (err) { return done(err); }
      seleniumServer = child;
      done();
    });
  });
});

gulp.task('e2e', ['http', 'selenium'], () => {
  return gulp.src('wdio.conf.js')
    .pipe(webdriver()).on('error', () => {
      seleniumServer.kill();
      process.exit(1);
    });
});

gulp.task('test', ['e2e'], () => {
  httpServer.close();
  seleniumServer.kill();
});
