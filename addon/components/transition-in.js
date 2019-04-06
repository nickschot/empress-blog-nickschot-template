import Component from '@ember/component';
import InViewportMixin from 'ember-in-viewport';
import { computed } from '@ember/object';

export default Component.extend(InViewportMixin, {
  classNames: ['slide-up'],
  classNameBindings: ['type', 'isVisibleClass'],

  type: 'slide-up',

  init(){
    this._super(...arguments);

    this.set('intersectionThreshold', 1);
  },

  didEnterViewport() {
    this.set('isVisible', true);
  },

  isVisibleClass: computed('isVisible', 'type', function(){
    if(this.isVisible){
      return `${this.type}--active`;
    }
  })
});
