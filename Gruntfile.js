module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        watch: {
          sass: {
            files: './src/css/sass/*.scss',
            tasks: ['sass'],
          },

          livereload: {
            options: { livereload: true },
            files: ['./src/css/*']
          }
        },

        sass: {
          dist: {
            files: {
              './src/css/style.css': './src/css/sass/style.scss'
            }
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ["watch"]);
}
