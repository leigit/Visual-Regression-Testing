# Visual-Regression-Testing

## Getting set-up
WebdriverCSS uses GraphicsMagick for image processing.
### For Mac (homebrew)
~~~
$ brew install graphicsmagick
~~~

### For Windows
download the suitable version from here: http://www.graphicsmagick.org/download.html

### Install Webdriverio and webdrivercss
webdrivercss does not yet support webdriverio v3, so be sure to install the version below.
install globally
~~~
$ npm install webdrivercss
~~~
~~~
$ npm install webdriverio@2.4.5
~~~

See install instructions at webdrivercss github page for additional info - https://github.com/webdriverio/webdrivercs

## Install dev dependencies
from the root of the project
~~~
$ npm install
~~~
### make sure gulp is installed globally
~~~
$ npm install -g gulp
~~~

## Run the tests with node
### Step 1 - Start the selenium seleniumServer
~~~
$ selenium-standalone start
~~~
### Step 2 - Run your tests
~~~
$ node tests/specs/test1
~~~

## Run the tests with mocha (instead of node)
install mocha globally
~~~
$ npm install mocha
~~~
Run the tests
~~~
$ mocha tests/specs/test1
~~~
## Run the tests with gulp
There is a gulp task which will autorun and kill the selenium server and run the tests.
~~~
$ gulp test
~~~


