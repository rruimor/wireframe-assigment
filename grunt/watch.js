module.exports = {
  sass: {
    files: './src/css/sass/*.scss',
    tasks: ['sass'],
  },

  cssmin: {
    files: './src/css/*.css',
    tasks: ['cssmin'],
  },

  livereload: {
    options: { livereload: true },
    files: ['./src/css/*']
  }
}
