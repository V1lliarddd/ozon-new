import { ProgressBar } from '../../components/progress/progress.js';

export class ProgressController {
  constructor({ container }) {
    this.container = container;
    this.progressBar = undefined;
  }

  init() {
    const progressBar = new ProgressBar({
      value: 25
    });
    this.progressBar = progressBar;
    this.container.appendChild(progressBar.getElement());
  }

  getElement() {
    return this.progressBar;
  }
}
