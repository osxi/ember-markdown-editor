import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chrome-window', 'Integration | Component | chrome window', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(3);

  this.render(hbs`{{chrome-window content="foo"}}`);

  assert.equal(this.$().find('.title-bar').length, 1);
  assert.equal(this.$().find('.content').length, 1);
  assert.equal(this.$().find('.content').html().trim(), 'foo');
});
