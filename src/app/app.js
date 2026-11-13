import { Controller } from '../controllers/controller.js';
import { ProgressController } from '../controllers/progress.js';
import { MainMarkdown } from './markdown.js';

export default class App {
  constructor() {
    this.root = document.body;
    this.mainMarkdown = new MainMarkdown();
    const template = document.createElement('template');
    template.innerHTML = this.mainMarkdown.init();
    this.root.appendChild(template.content);

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
    this.controller = new Controller({
      inputContainer: this.inputContainer,
      animateContainer: this.animateContainer,
      hideContainer: this.hideContainer,
      progressBar: this.progressBar.getProgressBar()
    });

    this.controller.init();
  }

  render() {
    this.#initProgressBar();
    this.#initController();
  }
}
