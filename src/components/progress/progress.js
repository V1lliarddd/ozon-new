import { initProgressBarMarkup } from './markup.js';

import {
  DEFAULT_PROGRESS_ATTRIBUTES,
  MIN_PROGRESS,
  MAX_PROGRESS,
  FULL_CIRCLE,
  STROKE_TRANSITION,
  NO_TRANSITION
} from './constants.js';

export class ProgressBar {
  constructor(options = {}) {
    this.options = {
      ...DEFAULT_PROGRESS_ATTRIBUTES,
      ...options
    };
    this.#init();
  }

  #init() {
    this.element = document.createElement('div');
    this.element.classList.add('progress-bar');

    this.#render();
    this.setVisibility(!this.options.hide);
    this.setProgress(this.options.value);
    if (this.options.animate) {
      this.#toggleRotationAnimation(true);
    }
  }

  #render() {
    const { radius, strokeWidth, progressColor, backgroundColor } =
      this.options;

    const diameter = radius * 2 + strokeWidth * 2;
    const center = diameter / 2;

    this.element.innerHTML = initProgressBarMarkup({
      diameter,
      strokeWidth,
      backgroundColor,
      progressColor,
      center,
      radius
    });

    this.progressSVG = this.element.querySelector('svg');
    this.spotlightCircle = this.element.querySelector(
      '.progress-bar-spotlight'
    );
  }

  #updateProgress(value) {
    const clamp = Math.min(MAX_PROGRESS, Math.max(MIN_PROGRESS, value));
    const length = FULL_CIRCLE * this.options.radius;
    const offset = length * (1 - clamp / MAX_PROGRESS);
    this.#initUpdateProgressStyle(offset, length);
  }

  #initUpdateProgressStyle(offset, length) {
    this.spotlightCircle.style.transition = this.options.animate
      ? STROKE_TRANSITION
      : NO_TRANSITION;

    this.spotlightCircle.style.strokeDashoffset = `${offset}`;
    this.spotlightCircle.style.strokeDasharray = `${length}`;
  }

  #toggleRotationAnimation(shouldRotate) {
    this.element.classList.toggle('progress-rotating', shouldRotate);
    this.element.classList.toggle('progress-paused', !shouldRotate);

    if (shouldRotate && this.progressSVG) {
      this.progressSVG.style.animationDuration = `${this.options.rotationSpeed}s`;
    }
  }

  setStartAnimation(startAnimation) {
    this.options.animate = startAnimation;
    this.#toggleRotationAnimation(startAnimation);
  }

  setProgress(value) {
    this.options.value = value;
    this.#updateProgress(value);
  }

  setVisibility(isVisible) {
    this.options.hide = !isVisible;
    this.element.classList.toggle('hidden', !isVisible);
  }

  getElement() {
    return this.element;
  }

  destroy() {
    this.element.remove();
    this.progressSVG = null;
    this.spotlightCircle = null;
    this.element = null;
  }
}
