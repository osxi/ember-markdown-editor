import Ember from 'ember';

export default Ember.Controller.extend({
  markdown: '',
  html: '',

  actions: {
    updateMarkdown(html) {
      this.set('html', html);
    }
  }
});
