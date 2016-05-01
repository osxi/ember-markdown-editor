import Ember from 'ember';
import icAjax from 'ic-ajax';
import marked from 'npm:marked';

const { isBlank, on, observer, Component } = Ember;

export default Component.extend({
  classNames: ['markdown-editor'],
  markdown: '',
  repo: 'osxi/ember-markdown-editor',
  validRepo: true,

  didInsertElement() {
    if (!isBlank(this.get('repo'))) {
      this.send('retrieveMarkdown');
    }
  },

  _keyUpObserver: on('init', observer('markdown', function() {
    let html = marked(this.getWithDefault('markdown'), 'Nothing to show right now :D');
    this.sendAction('key-up', html);
  })),

  actions: {
    retrieveMarkdown() {
      let repo = this.get('repo');
      let url = `https://raw.githubusercontent.com/${repo}/master/README.md`;

      return icAjax(url).then(md => {
        this.set('validRepo', true);
        this.set('markdown', md);
      }).catch(() => this.set('validRepo', false));
    }
  },
});
