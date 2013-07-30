/*
 * grunt-wordpress-rev
 * https://github.com/Melindrea/grunt-wordpress-rev
 *
 * Copyright (c) 2013 Sebastiaan Deckers, Marie Hogebrandt
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Configuration to be run (and then tested).
    wpRev: {
      default_options: {
        src: ['tmp/default.txt']
      },
      custom_options: {
        options: {
          algorithm: 'sha1',
          length: 4
        },
        src: ['tmp/custom.txt']
      },
      international_options: {
        options: {
          encoding: 'utf8'
        },
        src: ['tmp/international.txt']
      },
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // By default, lint
  grunt.registerTask('default', ['jshint']);

};
