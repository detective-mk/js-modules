export class Tab {
  constructor(rootElm) {
    this.rootElm = rootElm;
    this.tabBtnElms = this.rootElm.querySelectorAll(".js-tab-trigger");
    this.tabContElms = this.rootElm.querySelectorAll(".js-tab-target");
    this.options = {
      active: "is-active",
      open: "is-open",
      hidden: "is-hidden",
    };
  }

  init() {
    this.tabBtnElms[0].classList.add(this.options.active);
    for (let i = 0; i < this.tabContElms.length; i++) {
      if (i === 0) {
        this.tabContElms[i].classList.add(this.options.open);
      } else {
        this.tabContElms[i].classList.add(this.options.hidden);
      }
    }
    this.activate();
  }

  reset() {
    this.tabBtnElms.forEach((element) => {
      if (element.classList.contains(this.options.active)) {
        element.classList.remove(this.options.active);
      }
    });
    this.tabContElms.forEach((element) => {
      if (element.classList.contains(this.options.open)) {
        element.classList.remove(this.options.open);
      }
    });
  }

  activate() {
    this.tabBtnElms.forEach((element) => {
      element.addEventListener("click", () => {
        this.reset();
        element.classList.add(this.options.active);
        const tabNum = element.dataset.tabTrigger;

        this.tabContElms[tabNum - 1].classList.add(this.options.open);

        this.tabContElms.forEach((element) => {
          if (
            element.dataset.tabCont === tabNum &&
            element.classList.contains(this.options.hidden)
          ) {
            element.classList.remove(this.options.hidden);
            element.classList.add(this.options.open);
          } else {
            element.classList.add(this.options.hidden);
          }
        });
      });
    });
  }
}
