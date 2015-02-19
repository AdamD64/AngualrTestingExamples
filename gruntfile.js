var jshintTasks = require('./.grunt/jshint-tasks');
var gruntHttpServerTasks = require('./.grunt/grunt-http-server-tasks');
var watchTask = require('./.grunt/grunt-contrib-watch-tasks');


module.exports = function(grunt) {
    grunt.log.writeln("Initialising");
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: jshintTasks,
        //mochaTest: unitTestTask,
        //karma: karmaTask,
        'http-server' : gruntHttpServerTasks,
        watch: watchTask
        //protractor: protractorTask,

    });
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('unit-test', ['jshint:gruntfiles', 'jshint:unit', 'jshint:mainApp']);
    grunt.registerTask('nostart', ['unit-test']);
    grunt.registerTask('e2e-test', ['jshint:end2End']);
    grunt.registerTask('default', ['nostart', 'http-server:dev', 'watch', 'e2e-test']);
};