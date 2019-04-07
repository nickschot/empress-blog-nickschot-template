'use strict';

module.exports = {
  name: require('./package').name,

  config(env, config) {
    if(!config || !config['responsive-image']) {
      return {
        'responsive-image': {
          sourceDir: 'images',
          destinationDir: 'responsive-images',
          quality: 80,
          supportedWidths: [2048, 1536, 1080, 750, 640, 320, 150],
          removeSourceDir: false,
          justCopy: false,
          extensions: ['jpg', 'jpeg', 'png', 'gif']
        }
      }
    }
  },
};
