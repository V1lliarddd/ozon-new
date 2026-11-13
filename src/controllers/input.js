import { Input } from '../components/input/input.js';

export class InputController {
  #input = null;

  constructor({ progressBar }) {
    this.progressBar = progressBar;
    this.init();
  }

  init() {
    if (this.#input) return;

    this.#input = new Input(
      {
        type: 'number',
        placeholder: '0-100',
        name: 'progress-input',
        value: '',
        min: 0,
        max: 100
      },
      {
        onInput: (event) => {
          const value = parseInt(event.target.value, 10);
          const clamp = Math.min(100, Math.max(0, value));
          event.target.value = clamp;
          this.progressBar.setProgress(clamp);
        }
      }
    );
  }

  getElement() {
    return this.#input?.getElement() ?? null;
  }

  destroy() {
    this.#input?.destroy();
    this.#input = null;
  }
}
