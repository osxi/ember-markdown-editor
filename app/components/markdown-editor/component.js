import Ember from 'ember';
import marked from 'npm:marked';

export default Ember.Component.extend({
  classNames: ['markdown-editor'],

  _keyUpObserver: function() {
    var html = marked(this.get('markdown') || '');

    this.sendAction('key-up', html);
  }.observes('markdown').on('init')
});
