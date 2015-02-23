var jshintTasks          = require('./.grunt/jshint-tasks');
var gruntKarmaTasks      = require('./.grunt/grunt-karma-tasks');
var gruntHttpServerTasks = require('./.grunt/grunt-http-server-tasks');
var watchTask            = require('./.grunt/grunt-contrib-watch-tasks');
var protractorTask       = require('./.grunt/grunt-protractor-runner-tasks');

module.exports = function(grunt) {
    grunt.initConfig({
        pkg:            grunt.file.readJSON('package.json'),
        jshint:         jshintTasks,
        karma:          gruntKarmaTasks,
        'http-server' : gruntHttpServerTasks,
        watch:          watchTask,
        protractor:     protractorTask

    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');

    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.registerTask('unit-test', ['jshint:gruntfiles', 'jshint:unit', 'jshint:mainApp', 'karma']);
    grunt.registerTask('nostart', ['unit-test']);
    grunt.registerTask('e2e-test', ['jshint:end2End']);
    grunt.registerTask('default', ['nostart', 'http-server:dev', 'watch', 'e2e-test']);
};