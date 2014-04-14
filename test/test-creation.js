'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;

describe('react-app generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('react-app:app', [
        '../../app'
      ], 'test-app');
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) { var expected = [
      '.gitignore',
      'Gruntfile.js',
      'index.js',
      'package.json',
      'webpack.config.js'
    ]

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});
