import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  selectedDay: moment(),

  actions: {
    daySelected: function(day) {
      this.set('selectedDay', day);
    }
  }
});
