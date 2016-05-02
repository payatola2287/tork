module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            A: {
                files: ['public/src/css/*.css'],
                tasks: ['default']
            }
        },
        postcss: {
            options: {
                map: {
                    inline: false, // save all sourcemaps as separate files...
                    annotation: 'public/dist/maps//' // ...to the specified directory
                },
                processors: [
                    require("postcss-import")({}),
                    require('postcss-nesting'),
                    require('precss')({ /* options */ }),
                    require('postcss-color-function'),
                    require("postcss-calc"),
                    require("css-mqpacker"),
                    require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                ]
            },
            dist: {
                src: 'public/src/css/main.css',
                dest: 'public/dist/main.css'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'public/dist',
                    src: ['*.css', '!*.min.css'],
                    dest: 'public/dist',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            flat: {
                files: {
                    'public/dist/build.min.js': ['public/dist/build.js']
                }
            }
        },
        concat: {
            dist: {
                src: ['public/src/js/jquery-1.12.3.min.js','public/src/js/bootstrap.min.js','public/src/js/main.js'], //FIFO - first in first out
                dest: 'public/dist/build.js',
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("css-mqpacker");
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['postcss:dist','cssmin']);
    grunt.registerTask('minimize', ['concat:dist','uglify:flat']);

};