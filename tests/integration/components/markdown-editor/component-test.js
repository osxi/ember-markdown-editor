import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('markdown-editor', 'Integration | Component | markdown editor', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{markdown-editor}}`);

  assert.equal(this.$('textarea').length, 1);
});
