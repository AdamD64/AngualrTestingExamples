(function(){
    'use strict';
    module.exports = {
        mainappjs: {
            files: './app/scripts/**/*.js',
            tasks: ['jshint:mainApp', 'karma']
        },
        gruntjs: {
            files: ['./gruntfile.js', './.grunt/*.js'],
            tasks: ['jshint:gruntfiles', 'nostart']
        },
        unittests:{
            files: ['./tests/unit-tests/**/*.js'],
            tasks: ['jshint:unit', 'karma']
        },

        e2e:{
            files: ['./tests/e2e-tests/**/*.js'],
            tasks: ['jshint:end2End']
        }
    };
}());