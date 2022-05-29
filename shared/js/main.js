import { Tab } from "./modules/tab.js";
import { Toggle } from "./modules/toggle.js";

const tab = document.querySelector(".js-tab");
if (tab) {
  new Tab(tab).init();
}

const toggles = document.querySelectorAll(".js-toggle");
if (toggles) {
  toggles.forEach((element) => {
    new Toggle(element).init();
  });
}
