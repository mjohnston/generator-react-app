var webpack = require('webpack')
  , webpackConfig = require('./webpack.config');

// Default to development mode
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    webpack: {
      options: webpackConfig,
      development: {
        devtool: 'sourcemap',
        debug: true
      }
    },

    shell: {
      server: {
        command: 'node index.js',
        options: {
          async: true
        }
      }
    },

    watch: {
      src: {
        files: ['./src/**/*.*'],
        tasks: 'webpack:development',
        options: {
          spawn: false,
          livereload: 35729
        }
      }
    },

    clean: {
      build: ['public/build']
    }

  });

  grunt.registerTask('default', 'serve');
  grunt.registerTask('serve', [
    'clean',
    'webpack:development',
    'shell:server',
    'watch'
  ]);

};

