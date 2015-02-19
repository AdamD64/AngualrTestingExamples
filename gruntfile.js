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

    grunt.registerTask('nostart', ['jshint'])
    grunt.registerTask('default', ['nostart', 'http-server:dev', 'watch']);
};