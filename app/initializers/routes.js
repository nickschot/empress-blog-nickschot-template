import Router from '../router';

export function initialize() {
  Router.map(function() {
    this.route('blog');
    this.route('post', { path: '/blog/:id' });
    this.route('page', { path: '/blog/page/:id' });
    this.route('tag', { path: '/blog/tag/:id' });
  });
}

export default {
  initialize
};
