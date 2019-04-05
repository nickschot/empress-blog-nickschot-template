import Component from '@ember/component';
import layout from '../../templates/components/timeline/unit';
import { computed } from '@ember/object';

export default Component.extend({
  layout,

  computedClasses: computed('type', function(){
    if(this.type === 'right'){
      return `timeline-unit--right`;
    } else {
      return `timeline-unit--left`;
    }
  })
});
