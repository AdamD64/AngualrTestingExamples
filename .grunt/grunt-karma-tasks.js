(function(){
    'use strict';
    module.exports = {
        unit:{
            configFile: 'karma.conf.js',
            options: {
                files: [
                    './app/bower_components/angular/angular.js',
                    './app/bower_components/angular-mocks/angular-mocks.js',
                    './app/scripts/modules.js',
                    './app/scripts/controller.js',
                    './app/scripts/services/api-proxy/*.js',
                    './tests/unit-tests/**/*.js']
            }
        }
    };
}());
