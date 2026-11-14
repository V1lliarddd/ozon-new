import { Progress } from '../../components/progress/progress.js';

export class ProgressController {
  constructor({ container }) {
    this.container = container;
    this.progress = undefined;
  }

  init() {
    const progress = new Progress({
      value: 25
    });
    this.progress = progress;
    this.container.appendChild(progress.getElement());
  }

  getElement() {
    return this.progress;
  }
}
