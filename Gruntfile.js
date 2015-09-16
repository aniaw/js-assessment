module.exports = function (grunt)
{
    'use strict';
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: true
            },
            all: ['app/*.js']
        }
    });
};
