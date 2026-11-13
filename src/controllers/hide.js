import { SwitchInput } from '../components/switch-input/switch-input.js';

export class HideController {
  #hideSwitch = null;

  constructor({ progressBar }) {
    this.progressBar = progressBar;
    this.init();
  }

  init() {
    if (this.#hideSwitch) return;

    this.#hideSwitch = new SwitchInput(
      { name: 'hide-switch' },
      {
        onChange: (event) => {
          this.progressBar.setVisibility(!event.target.checked);
        }
      }
    );
  }

  getElement() {
    return this.#hideSwitch?.getElement() ?? null;
  }

  destroy() {
    this.#hideSwitch?.destroy();
    this.#hideSwitch = null;
  }
}
