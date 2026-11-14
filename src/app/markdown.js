export class MainMarkdown {
  init() {
    const template = document.createElement('template');
    template.innerHTML = this.#initHeader() + this.#initMain();
    return template.content;
  }

  #initHeader() {
    return `<header class="header">
      <h1>Progress</h1>
    </header>`;
  }

  #initControl(label, id) {
    return `<div class="input-item">
          <div id="${id}"></div>
          <span class="input-item-label">${label}</span>
        </div>`;
  }

  #initMain() {
    return `<main class="progress-layout">
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
