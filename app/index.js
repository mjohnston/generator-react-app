'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var ReactAppGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the React App generator.'));
  },

  app: function () {
    this.mkdir('src');
    this.mkdir('public');

    this.copy('_.gitignore', '.gitignore');
    this.copy('_Gruntfile.js', 'Gruntfile.js');
    this.copy('_index.js', 'index.js');
    this.copy('_package.json', 'package.json');
    this.copy('_webpack.config.js', 'webpack.config.js');

    this.copy('src/_app.js', 'src/app.js');
    this.copy('src/_app.less', 'src/app.less');

    this.copy('public/_index.html', 'public/index.html');
  }
});

module.exports = ReactAppGenerator;
