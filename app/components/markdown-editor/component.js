import Ember from 'ember';
import marked from 'npm:marked';

export default Ember.Component.extend({
  didInsertElement() {
    var $raw = this.$("textarea[name='editor']");

    this.$("textarea[name='editor']").on('keyup', () => {
      this._updateMarkdown($raw);
    });
  },

  _updateMarkdown($raw) {
    var raw = $raw.val();
    var md  = marked(raw);

    this.sendAction('key-up', md);
  }
});
