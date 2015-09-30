import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  var controller = this.subject();
  assert.ok(controller);
});

test('actions#updatePreview update html prop', function(assert) {
  var controller = this.subject();
  var html = '<marquee>foo</marquee>';

  controller.send('updatePreview', html);

  assert.equal(controller.get('html'), html);
});
