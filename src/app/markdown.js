export class MainMarkdown {
  init() {
    return this.#initHeader() + this.#initMain();
  }

  #initHeader() {
    return `<header class="header">
      <h1>Progress</h1>
    </header>`;
  }

  #initControl(label, id) {
    return `<div class="controlItem">
          <div id="${id}"></div>
          <span class="controlItemText">${label}</span>
        </div>`;
  }

  #initMain() {
    return `<main class="progress-bar">
      <div
        class="progress-bar-container"
        id="progress-bar-container"
        role="progressbar"
      ></div>

      <div class="progress-bar-controls">
        ${this.#initControl('Value', 'input-value-container')}
        ${this.#initControl('Animate', 'input-animate-container')}
        ${this.#initControl('Hide', 'input-hide-container')}
      </div>
    </main>`;
  }
}
