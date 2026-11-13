import { ProgressBar } from '../components/progress/progress.js';

export class ProgressController {
  #progressBar = null;

  constructor({ container }) {
    this.container = container;
  }

  init() {
    if (this.#progressBar) return;

    this.#progressBar = new ProgressBar();

    this.container.appendChild(this.#progressBar.getElement());
  }

  getProgressBar() {
    return this.#progressBar;
  }

  getElement() {
    return this.#progressBar?.getElement() ?? null;
  }

  destroy() {
    this.#progressBar?.destroy();
    this.#progressBar = null;
  }
}
