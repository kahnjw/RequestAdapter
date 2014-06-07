'use strict';


module.exports = function(config) {
  var configuration = {
    frameworks: ['mocha', 'browserify'],
    browsers: ['PhantomJS'],
    preprocessors: {
      'test/*-spec.js': ['browserify']
    },
    browserify: {
      debug: true,
      watch: true
    },
    files: [
      'test/*-spec.js'
    ],
    singleRun: true
  };

  config.set(configuration);
};
