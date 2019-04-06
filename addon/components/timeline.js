import Component from '@ember/component';
import layout from '../templates/components/timeline';
import { computed } from '@ember/object';

export default Component.extend({
  layout,

  currentType: false,

  studyClass: computed('currentType', function(){
    return this.currentType === 'study' ? 'timeline-btn--active' : '';
  }),
  workClass: computed('currentType', function(){
    return this.currentType === 'work' ? 'timeline-btn--active' : '';
  }),

  actions: {
    updateItems(type){
      if(type === this.currentType){
        this.set('currentType', false);
      } else {
        this.set('currentType', type);
      }
    }
  }
});
