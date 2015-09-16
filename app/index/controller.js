import Ember from 'ember';

export default Ember.Controller.extend({
  html: '',
  markdown: '',

  actions: {
    updatePreview(html) {
      this.set('html', html);
    }
  }
});
