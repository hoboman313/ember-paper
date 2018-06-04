/**
 * @module ember-paper
 */
import Component from '@ember/component';
import { invokeAction } from 'ember-invoke-action';

/**
 * @class PaperDialogContainer
 * @extends Ember.Component
 */
export default Component.extend({
  classNames: ['md-dialog-container'],

  onMouseUp(ev) {
    if (this._sourceEl === this.element && ev.target === this.element) {
      ev.stopPropagation();
      ev.preventDefault();
      invokeAction(this, 'outsideClicked');
    }
  },

  onMouseDown(ev) {
    this._sourceEl = ev.target;
  },

  mouseDown(ev) {
    this.onMouseDown(ev);
  },

  mouseUp(ev) {
    this.onMouseUp(ev);
  },

  // needed for iOS
  touchStart(ev) {
    this.onMouseDown(ev);
  },

  // needed for iOS
  touchEnd(ev) {
    this.onMouseUp(ev);
  }
});
