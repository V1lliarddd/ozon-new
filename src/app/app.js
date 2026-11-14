import { InputController } from '../controllers/input-controller/input-controller.js';
import { ProgressController } from '../controllers/progress-controller/progress-controller.js';

export default class App {
  constructor() {
    this.progressContainer = document.getElementById('progress-container');
    this.inputContainer = document.getElementById('input-value-container');
    this.animateContainer = document.getElementById('input-animate-container');
    this.hideContainer = document.getElementById('input-hide-container');

    this.progress = null;
    this.controller = null;
  }

  #initProgress() {
    this.progress = new ProgressController({
      container: this.progressContainer
    });
    this.progress.init();
  }

  #initController() {
    this.controller = new InputController({
      valueContainer: this.inputContainer,
      animateContainer: this.animateContainer,
      hideContainer: this.hideContainer,
      progress: this.progress.getElement()
    });

    this.controller.init();
  }

  render() {
    this.#initProgress();
    this.#initController();
  }
}
