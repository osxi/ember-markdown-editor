import Ember from 'ember';
import icAjax from 'ic-ajax';
import marked from 'npm:marked';

export default Ember.Component.extend({
  classNames: ['markdown-editor'],

  repo: 'osxi/ember-markdown-editor',
  validRepo: true,

  didInsertElement() {
    if (!Ember.isBlank(this.get('repo'))) {
      this.send('retrieveMarkdown');
    }
  },

  actions: {
    retrieveMarkdown() {
      var repo = this.get('repo');
      var url = `https://rawgit.com/${repo}/master/README.md`;

      return icAjax(url).then(md => {
        this.set('validRepo', true);
        this.set('markdown', md);
      }).catch(() => this.set('validRepo', false));
    }
  },

  _keyUpObserver: function() {
    var html = marked(this.get('markdown') || '');

    this.sendAction('key-up', html);
  }.observes('markdown').on('init')
});
