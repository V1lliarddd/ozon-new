import { InputController } from '../controllers/input-controller/input-controller.js';
import { ProgressController } from '../controllers/progress-controller/progress-controller.js';
import { MainMarkdown } from './markdown.js';

export default class App {
  constructor() {
    this.container = new MainMarkdown().init();
    document.body.appendChild(this.container);

    this.progressContainer = document.getElementById('progress-bar-container');
    this.inputContainer = document.getElementById('input-value-container');
    this.animateContainer = document.getElementById('input-animate-container');
    this.hideContainer = document.getElementById('input-hide-container');

    this.progressBar = null;
    this.controller = null;
  }

  #initProgressBar() {
    this.progressBar = new ProgressController({
      container: this.progressContainer
    });
    this.progressBar.init();
  }

  #initController() {
    this.controller = new InputController({
      valueContainer: this.inputContainer,
      animateContainer: this.animateContainer,
      hideContainer: this.hideContainer,
      progressBar: this.progressBar.getElement()
    });

    this.controller.init();
  }

  render() {
    this.#initProgressBar();
    this.#initController();
  }
}
