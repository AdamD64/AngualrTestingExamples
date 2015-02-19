(function(){
    'use strict';
    module.exports = {
        mainappjs: {
            files: './main-app/app/scripts/**/*.js',
            tasks: ['jshint:mainapp']
        },
        gruntjs: {
            files: ['./gruntfile.js', './.grunt/*.js'],
            tasks: ['jshint:gruntfiles', 'nostart']
        },
        unittests:{
            files: ['./tests/unit-tests/**/*.js'],
            tasks: ['jshint:unit']
        },

        e2e:{
            files: ['./tests/e2e-tests/**/*.js'],
            tasks: ['jshint:end2End']
        }
    };
}());