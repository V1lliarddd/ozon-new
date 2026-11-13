import { Input } from '../input/input.js';
import { DEFAULT_SWITCH_INPUT_ATTRIBUTES } from './constants.js';

export class SwitchInput extends Input {
  constructor(attributes, callbacks = {}) {
    super({ ...DEFAULT_SWITCH_INPUT_ATTRIBUTES, ...attributes }, callbacks);
  }

  init() {
    super.init();
    if (
      this.attributes.checked === true ||
      this.attributes.checked === 'true'
    ) {
      this.input.checked = true;
      this.input.classList.add('checked');
    }
  }

  initInputEvents() {
    this._onChange = (event) => {
      this.input.classList.toggle('checked', event.target.checked);
      this.callbacks.onChange?.(event);
    };
    this.input.addEventListener('change', this._onChange);
  }

  setChecked(isChecked) {
    this.input.checked = isChecked;
    this.input.classList.toggle('checked', isChecked);
  }

  destroy() {
    this.input.removeEventListener('change', this._onChange);
    super.destroy();
  }
}
