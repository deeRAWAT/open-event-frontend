import { test } from 'ember-qunit';
import moduleForComponent from '../../../helpers/component-helper';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('modals/confirm-modal', 'Integration | Component | modals/confirm modal');

test('it renders', function(assert) {
  this.set('isOpen', true);
  this.render(hbs`{{modals/confirm-modal isOpen=isOpen}}`);
  assert.ok(this.$().html().trim().includes('Are you sure ?'));
});
