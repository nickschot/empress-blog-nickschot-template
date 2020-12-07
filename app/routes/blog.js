import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  //classNames: ['index-template', 'home-template'],
  store: service(),

  async model() {
    const posts = await this.store.query('content', {
      path: 'content',
    });

    return posts.sortBy('date').reverse();
  },
});
