import Component from '@ember/component';
import layout from '../../templates/components/timeline/unit';
import { computed } from '@ember/object';

export default Component.extend({
  layout,

  computedClasses: computed('type', 'currentType', function(){
    const classes = [];

    if(this.type === 'right'){
      classes.push(`timeline-unit--right`);

      if(this.currentType && this.currentType !== 'work'){
        classes.push(`timeline-unit--hidden`);
      }
    } else {
      classes.push(`timeline-unit--left`);

      if(this.currentType && this.currentType !== 'study'){
        classes.push(`timeline-unit--hidden`);
      }
    }

    return classes.join(' ');
  })
});
