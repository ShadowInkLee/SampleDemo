/**
 * 定义自动化脚本
 */


module.exports = function(grunt) {

/** get child directory for specified path.
    var fs = require('fs');
    var path = require('path');
    var async = require('async');
    var dirpath = __dirname + '\\Demo';
    var childDir = [];
    var files = fs.readdirSync(dirpath);
    console.log(dirpath);
    async.each(files, function(file, callback) {
        var fileInfo = fs.statSync(dirpath + '\\' + file);
        if (fileInfo.isDirectory()) {
            childDir.push(dirpath + '\\' + file);
        }
        callback();

    }, function(err) {
        if (err) {
            console.log('haha');
        } else {
            console.log('Async complete');
        }
    })
    console.log(childDir);
    */

    var pkg = grunt.file.readJSON('package.json');
    var cfg = {
        serverHost: 'localhost',
        serverPort: 9000,
        lrProt: 35729
    };
    grunt.initConfig({
        pkg: pkg,
        connect: {
            server: {
                options: {
                    port: cfg.serverPort,
                    hostname: cfg.serverHost,
                    livereload: true,
                    // debug: true,
                    base: ['./bower_components','./Demo','../SampleDemo']
                    // base:[{path:'./bower_components'},{path:'./Demo',options:{
                    //     extensions:['html','htm'],
                    //     'index':['index.html']
                    // }},{path:'../SampleDemo'}]
                }
            }
        },

        watch: {
            task: {
                options: {
                    livereload: cfg.lrProt
                },
                files: ['./Demo/**/*.html','./Demo/**/{,*/}*.css','./Demo/**/{,*/}*.js']
            }
        }

    })

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //自定义任务
    grunt.registerTask('default', ['connect', 'watch']);
}
