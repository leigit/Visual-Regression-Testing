var webdriverio = require('webdriverio');
var webdrivercss = require('webdrivercss');

var client = webdriverio.remote({
desiredCapabilities: {
//browserName: 'chrome'
}
});

webdrivercss.init(client, {
screenshotRoot: 'tests/visual/baseline',
failedComparisonsRoot: 'tests/visual/failures',
misMatchTolerance: 0.05,
screenWidth: [320,480,640,1024]
}
);

var assert = require('assert');

describe('my website should always look the same',function() {
  this.timeout(100000);
    it('header should look the same',function(done) {
      client
      .init()
      .url('http://example.com')
      .webdrivercss('homepage', [{
      name: 'title',
      elem: 'body'
      }])
      .call(done);
    });
  });