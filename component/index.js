'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var ReactComponentGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    this.pkg = require('../package.json');
  },

  files: function () {
    this.mkdir('src');

    this.copy('src/_component.js', 'src/components/' + this._.slugify(this.name) + '.js');
    this.copy('src/_component.less', 'src/components/' + this._.slugify(this.name) + '.less');
  }
});

module.exports = ReactComponentGenerator;
