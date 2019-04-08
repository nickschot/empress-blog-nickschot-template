'use strict';

const _ = require('lodash');
const walkSync = require('walk-sync');
const yamlFront = require('yaml-front-matter');
const { readFileSync } = require('fs');
const { join } = require('path');

module.exports = {
  name: require('./package').name,

  urlsForPrember() {
    let appPrefix = join(this.project.configPath(), '../..');
    let blogPrefix = '/blog';

    const content = walkSync(join(appPrefix, 'content'), {
      globs: ['*.md'],
    });

    const contentYamls = _.chain(content)
      .map(path => ({
        path,
        yaml: yamlFront.loadFront(readFileSync(join(appPrefix, 'content', path)))
      }))
      .value();

    const staticUrls = ['/', '/blog'];

    const tagUrls = _.chain(contentYamls)
      .map(file => file.yaml.tags)
      .flatten()
      .compact()
      .uniq()
      .map(tag => `${blogPrefix}/tag/${tag}`)
      .value();

    const contentUrls = content
      .map(file => file.replace(/\.md$/, ''))
      .map(file => `${blogPrefix}/${file}`);

    /*const authorUrls = walkSync(join(appPrefix, 'author'), {
        globs: ['*.md'],
      }).map(file => file.replace(/\.md$/, '')).map(file => `${blogPrefix}/author/${file}`);
    */
    return [...staticUrls, ...contentUrls, /*...authorUrls,*/ ...tagUrls];
  },
};
