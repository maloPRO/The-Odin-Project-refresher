import "../styles/home.css";
import { createDiv } from "./utils";

export const home = (() => {
  const homeBody = createDiv("homeBody");
  const main = document.querySelector(".main");
  const mobileMenu = document.querySelector(".mobile-menu");

  document.querySelectorAll(".home").forEach((tab) => {
    tab.addEventListener("click", () => {
      clearChildren(main, 1);
      mobileMenu.classList.toggle("hidden");
      main.appendChild(homeBody);
    });
  });

  const slogan = createDiv("slogan", "Eat, Drink & Enjoy!");
  homeBody.appendChild(slogan);

  function clearChildren(parent, keep = 0) {
    while (parent.children.length > keep) parent.removeChild(parent.lastChild);
  }

  return { homeBody };
})();
