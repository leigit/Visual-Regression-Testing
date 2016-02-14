var webdriverio = require('webdriverio');
var webdrivercss = require('webdrivercss');

var client = webdriverio.remote({
desiredCapabilities: {
browserName: 'firefox'
}
});

webdrivercss.init(client, {
screenshotRoot: 'tests/visual/baseline',
failedComparisonsRoot: 'tests/visual/failures',
});

client
.init()
.url('http://crashbangcreative.lg/app/')
.webdrivercss('homepage', [{
name: 'title',
elem: 'body'
}])
.end();

// describe('page title', function() {
//   it('has the correct page title', function() {
//     client
//     .init()
//     .url('http://crashbangcreative.lg/app/')
//     .webdrivercss('login form', [{
//     name: 'title',
//     elem: 'body'
//     }])
//     .end();
//   });
// });