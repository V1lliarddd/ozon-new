import { InputController } from './input.js';
import { AnimateController } from './animate.js';
import { HideController } from './hide.js';

export class Controller {
  constructor({
    inputContainer,
    animateContainer,
    hideContainer,
    progressBar
  }) {
    this.inputContainer = inputContainer;
    this.animateContainer = animateContainer;
    this.hideContainer = hideContainer;
    this.progressBar = progressBar;
  }

  init() {
    const inputElement = new InputController({
      progressBar: this.progressBar
    });
    const animateElement = new AnimateController({
      progressBar: this.progressBar
    });
    const hideElement = new HideController({ progressBar: this.progressBar });

    this.inputContainer.appendChild(inputElement.getElement());
    this.animateContainer.appendChild(animateElement.getElement());
    this.hideContainer.appendChild(hideElement.getElement());
  }
}
