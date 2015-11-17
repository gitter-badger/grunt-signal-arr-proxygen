/*
 * grunt-signal-arr-proxygen
 *
 *
 * Copyright (c) 2015 Stephen C. Austin
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('signal-arr-proxygen', 'Wraps the signal-arr-proxygen utility so that it can be run as part of a grunt build process.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var done = this.async();
    var options = this.options({});
    var processor = require('signal-arr-proxygen/dist/processor');
    processor(options).then(done).catch(err => {
      throw err;
    });
    //
    //  // Iterate over all specified file groups.
    //  this.files.forEach(function (file) {
    //    // Concat specified files.
    //    var src = file.src.filter(function (filepath) {
    //      // Warn on and remove invalid source files (if nonull was set).
    //      if (!grunt.file.exists(filepath)) {
    //        grunt.log.warn('Source file "' + filepath + '" not found.');
    //        return false;
    //      } else {
    //        return true;
    //      }
    //    }).map(function (filepath) {
    //      // Read file source.
    //      return grunt.file.read(filepath);
    //    }).join(grunt.util.normalizelf(options.separator));
    //
    //    // Handle options.
    //    src += options.punctuation;
    //
    //    // Write the destination file.
    //    grunt.file.write(file.dest, src);
    //
    //    // Print a success message.
    //    grunt.log.writeln('File "' + file.dest + '" created.');
    //  });
  });

};
