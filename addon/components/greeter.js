import Component from '@ember/component';
import layout from '../templates/components/greeter';
import InViewportMixin from 'ember-in-viewport';
import { inject as service } from '@ember/service';

export default Component.extend(InViewportMixin, {
  layout,
  bodyClass: service(),
  blog: service(),

  name: 'greeter-visible',

  init(){
    this._super(...arguments);
    this.set('viewportSpy', true);
  },

  willDestroyElement() {
    this._super(...arguments);
    this.get('bodyClass').deregister(this);
  },

  didEnterViewport(){
    this.get('bodyClass').register(this);
  },

  didExitViewport(){
    this.get('bodyClass').deregister(this);
  }
});
