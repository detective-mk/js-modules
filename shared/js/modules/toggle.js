export class Toggle {
  constructor(rootElm) {
    this.rootElm = rootElm;
    this.toggleBtn = rootElm.querySelector(".js-toggle-btn");
    this.toggleContent = rootElm.querySelector(".js-toggle-content");
    this.open = this.toggleBtn.getAttribute("aria-expanded") === "true";
    this.options = {
      active: "is-active",
      open: "is-open",
      hidden: "is-hidden",
    };

    this.toggleBtn.addEventListener("click", this.onButtonClick.bind(this));
  }

  init() {
    this.toggleBtn.setAttribute("aria-expanded", false);
  }

  onButtonClick() {
    this.toggle(!this.open);
  }

  toggle(open) {
    this.toggleBtn.setAttribute("aria-expanded", `${open}`);
    this.rootElm.classList.toggle(this.options.active);
  }
}
