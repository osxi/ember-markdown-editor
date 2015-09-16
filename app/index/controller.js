import Ember from 'ember';

export default Ember.Controller.extend({
  html: '',

  actions: {
    updatePreview(html) {
      this.set('html', html);
    }
  }
});
