import { DEFAULT_INPUT_ATTRIBUTES } from './constants.js';

export class Input {
  constructor(attributes = {}, callbacks = {}) {
    this.attributes = { ...DEFAULT_INPUT_ATTRIBUTES, ...attributes };
    this.callbacks = callbacks;

    this.render();
    this.init();
  }

  render() {
    this.input = document.createElement('input');
  }

  init() {
    Object.entries(this.attributes).forEach(([name, value]) => {
      if (value !== undefined && value !== null) {
        this.input.setAttribute(name, value === true ? '' : value);
      }
    });

    this.initInputEvents();
  }

  initInputEvents() {
    this._onInput = (event) => this.callbacks.onInput?.(event);
    this.input.addEventListener('input', this._onInput);
  }

  getElement() {
    return this.input;
  }

  setValue(value) {
    this.input.value = value;
  }

  toggleClass(className) {
    this.input.classList.toggle(className);
  }

  removeClass(className) {
    this.input.classList.remove(className);
  }

  addClass(className) {
    this.input.classList.add(className);
  }

  destroy() {
    this.input.removeEventListener('input', this._onInput);
    this.input.remove();
  }
}
