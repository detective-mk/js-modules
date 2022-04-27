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

  /**
   * タブの状態をリセット
   */
  reset() {
    for (const tabBtn of this.tabBtnElms) {
      if (tabBtn.classList.contains(this.options.active)) {
        tabBtn.classList.remove(this.options.active);
      }
    }
    for (const tabCont of this.tabContElms) {
      if (tabCont.classList.contains(this.options.open)) {
        tabCont.classList.remove(this.options.open);
      }
    }
  }

  /**
   * タブを活性化
   */
  activate() {
    this.tabBtnElms.forEach((element) => {
      element.addEventListener("click", () => {
        this.reset();
        element.classList.add(this.options.active);
        const tabNum = element.dataset.tabTrigger;

        this.tabContElms[tabNum - 1].classList.add(this.options.open);

        // this.tabContElms.forEach((element) => {
        //   if (
        //     element.dataset.tabCont === tabNum &&
        //     element.classList.contains(this.options.hidden)
        //   ) {
        //     element.classList.remove(this.options.hidden);
        //     element.classList.add(this.options.open);
        //   } else {
        //     element.classList.add(this.options.hidden);
        //   }
        // });

        for (const tabContElm of this.tabContElms) {
          if (
            tabContElm.dataset.tabCont === tabNum &&
            tabContElm.classList.contains(this.options.hidden)
          ) {
            tabContElm.classList.remove(this.options.hidden);
            tabContElm.classList.add(this.options.open);
          } else {
            tabContElm.classList.add(this.options.hidden);
          }
        }
      });
    });
  }
}
