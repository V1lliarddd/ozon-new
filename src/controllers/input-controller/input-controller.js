import { Input } from '../../components/input/input.js';
import { SwitchInput } from '../../components/switch-input/switch-input.js';

export class InputController {
  constructor({ valueContainer, animateContainer, hideContainer, progress }) {
    this.valueContainer = valueContainer;
    this.animateContainer = animateContainer;
    this.hideContainer = hideContainer;
    this.progress = progress;
  }

  init() {
    const valueInput = this.#initValueInput();
    const animateInput = this.#initAnimateInput();
    const hideInput = this.#initHideInput();

    this.valueContainer.appendChild(valueInput.getElement());
    this.animateContainer.appendChild(animateInput.getElement());
    this.hideContainer.appendChild(hideInput.getElement());
  }

  #initValueInput() {
    const valueInput = new Input(
      {
        placeholder: '0 - 100',
        name: 'input-value',
        value: 25
      },
      {
        onInput: (event) => {
          const raw = event.target.value;

          if (raw === '') {
            this.progress.setProgress(0);
            return;
          }

          const value = parseInt(event.target.value, 10);
          if (Number.isNaN(value)) return;

          const clamp = Math.min(100, Math.max(0, value));

          if (clamp !== value) {
            event.target.value = clamp;
          }

          this.progress.setProgress(clamp);
        }
      }
    );
    return valueInput;
  }
  #initAnimateInput() {
    const animateInput = new SwitchInput(
      {
        name: 'input-animate'
      },
      {
        onChange: (event) => {
          this.progress.setStartAnimation(event.target.checked);
        }
      }
    );
    return animateInput;
  }
  #initHideInput() {
    const hideInput = new SwitchInput(
      {
        name: 'input-hide'
      },
      {
        onChange: (event) => {
          this.progress.setVisibility(!event.target.checked);
        }
      }
    );
    return hideInput;
  }
}
