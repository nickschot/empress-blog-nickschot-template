import Component from '@ember/component';
import layout from '../templates/components/greeter';
import InViewportMixin from 'ember-in-viewport';
import { inject as service } from '@ember/service';
import { guidFor } from '@ember/object/internals';

export default Component.extend(InViewportMixin, {
  layout,
  bodyClass: service(),
  blog: service(),

  guid: guidFor(this),
  classNames: ['greeter-visible'],

  init(){
    this._super(...arguments);
    this.set('viewportSpy', true);
  },

  willDestroyElement() {
    this._super(...arguments);
    this.get('bodyClass').deregister(this.guid, this.classNames);
  },

  didEnterViewport(){
    this.get('bodyClass').register(this.guid, this.classNames);
  },

  didExitViewport(){
    this.get('bodyClass').deregister(this.guid, this.classNames);
  }
});
