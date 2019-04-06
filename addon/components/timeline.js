import Component from '@ember/component';
import layout from '../templates/components/timeline';

export default Component.extend({
  layout,

  currentType: false,

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
