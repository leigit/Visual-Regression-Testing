// create a WebdriverIO instance
var client = require('webdriverio').remote({
    desiredCapabilities: {
        browserName: 'firefox'
    }
}).init();
// initialise WebdriverCSS for `client` instance
require('webdrivercss').init(client, {
    // example options
    screenshotRoot: 'my-shots',
    failedComparisonsRoot: 'diffs',
    misMatchTolerance: 0.05,
    screenWidth: [320,480,640,1024]
});


var assert = require('assert');
describe('my website should always look the same',function() {
    it('header should look the same',function(done) {
        client
            .url('http://www.example.org')
            .webdrivercss('header', {
                name: 'header',
                elem: 'body'
            }, function(err,res) {
                assert.ifError(err);
                // this will break the test if screenshot is not within the mismatch tolerance
                assert.ok(res.isWithinMisMatchTolerance);
            })
            .call(done);
    });
  });