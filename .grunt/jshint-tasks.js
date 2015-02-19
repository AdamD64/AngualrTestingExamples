(function(){
    'use strict';
    module.exports = {
        gruntfiles: {
            src: ['./.grunt/*.js'],
            options: {
                node: true
            }
        },

        mainApp: {
            src: ['./app/scripts/**/*.js'],
            options: {
                node: true
            }
        },

        unit: {
            src: ['./tests/unit/**/*.js'],
            options: {
                node: true,
                "globals"   : {
                    "describe"   : false,
                    "it"         : false,
                    "by"         : false,
                    "before"     : false,
                    "beforeEach" : false,
                    "after"      : false,
                    "afterEach"  : false
                }
            }
        },

        end2End: {
            src: ['./tests/e2e-tests/**/*.js'],
            options: {
                node: true,
                "globals"   : {
                    "describe"   : false,
                    "it"         : false,
                    "by"         : false,
                    "before"     : false,
                    "beforeEach" : false,
                    "after"      : false,
                    "afterEach"  : false,
                    "browser"    : false,
                    "expect"     : false,
                    "element"    : false

                }
            }
        }
    };
}());