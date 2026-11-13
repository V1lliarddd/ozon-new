import { SwitchInput } from '../components/switch-input/switch-input.js';

export class AnimateController {
  #animateSwitch = null;

  constructor({ progressBar }) {
    this.progressBar = progressBar;
    this.init();
  }

  init() {
    if (this.#animateSwitch) return;

    this.#animateSwitch = new SwitchInput(
      { name: 'animate-switch' },
      {
        onChange: (event) => {
          this.progressBar.setStartAnimation(event.target.checked);
        }
      }
    );
  }

  getElement() {
    return this.#animateSwitch?.getElement() ?? null;
  }

  destroy() {
    this.#animateSwitch?.destroy();
    this.#animateSwitch = null;
  }
}
