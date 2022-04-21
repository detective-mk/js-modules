import { Tab } from "./modules/tab.js";

const tab = document.querySelector(".js-tab");
if (tab) {
  new Tab(tab).init();
}

const tabBtnElms = tab.querySelectorAll(".js-tab-trigger");
console.log(tabBtnElms);
