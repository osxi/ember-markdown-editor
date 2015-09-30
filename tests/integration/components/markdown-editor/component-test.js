import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

moduleForComponent('markdown-editor', 'Integration | Component | markdown editor', {
  integration: false
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{markdown-editor}}`);

  assert.equal(this.$('textarea').length, 1);
});

test('default properties', function(assert) {
  assert.expect(2);

  var subject = this.subject();

  this.render(hbs`{{markdown-editor}}`);

  assert.equal(subject.repo, 'osxi/ember-markdown-editor');
  assert.equal(subject.validRepo, true);
});

test('#didInsertElement sends retrieveMarkdown', function(assert) {
  assert.expect(1);

  var subject = this.subject();

  subject.actions.retrieveMarkdown = sinon.spy();

  this.render(hbs`{{markdown-editor}}`);

  assert.ok(subject.actions.retrieveMarkdown.calledOnce);
});
