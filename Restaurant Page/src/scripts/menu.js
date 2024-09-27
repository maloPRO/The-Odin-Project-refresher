import "../styles/menu.css";
import image1 from "../assets/location-bg.jpg";
import image2 from "../assets/contacts-bg.jpg";
import image3 from "../assets/bg-1.jpg";
import image4 from "../assets/about-bg.jpg";
import myMenu from "../assets/menu.json";

export const menu = (() => {
  const menuPage = createDiv("menu-page");
  const images = [image1, image2, image3, image4];
  const main = document.querySelector(".main");
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuTabs = document.querySelectorAll(".menu");
  const foods = myMenu.menu.food;
  const drinks = myMenu.menu.beverages;

  menuTabs.forEach((tab) =>
    tab.addEventListener("click", () => {
      clearChildren(main, 1);
      mobileMenu.classList.toggle("hidden");
      main.appendChild(menuPage);
    }),
  );

  const menuHead = createDiv("menu-head", "<h4>MENUS</h4>");
  menuPage.appendChild(menuHead);

  let idx = 0;
  setInterval(() => {
    menuHead.style.backgroundImage = `url(${images[idx]})`;
    idx = (idx + 1) % images.length;
  }, 5000);

  const menuContent = createDiv(
    "menu-content",
    `
    <div class='menuType'>
      <button class='foodBtn'>FOOD MENU</button>
      <button class='drinkBtn'>DRINK MENU</button>
    </div>
  `,
  );
  menuPage.appendChild(menuContent);

  const foodMenu = createMenuSection("foodMenu", "FOODS", foods);
  const drinkMenu = createMenuSection("drinkMenu", "DRINKS", drinks);

  const [foodBtn, drinkBtn] = menuContent.querySelectorAll("button");

  menuContent.appendChild(foodMenu);
  setActiveButton(foodBtn, drinkBtn);

  foodBtn.addEventListener("click", () => {
    switchMenu(menuContent, foodMenu, foodBtn, drinkBtn);
  });

  drinkBtn.addEventListener("click", () => {
    switchMenu(menuContent, drinkMenu, drinkBtn, foodBtn);
  });

  function createDiv(className, innerHTML = "") {
    const div = document.createElement("div");
    div.classList.add(className);
    div.innerHTML = innerHTML;
    return div;
  }

  function clearChildren(parent, keep = 0) {
    while (parent.children.length > keep) parent.removeChild(parent.lastChild);
  }

  function createMenuSection(className, title, items) {
    const section = createDiv(
      className,
      `<div class='menuTitle'>${title}</div>`,
    );
    items.forEach((item) => {
      section.appendChild(
        createDiv(
          `${className.slice(0, -4)}Card`,
          `
        <div class='itemName'>${item.name}</div>
        <div class='itemDesc'>${item.description}</div>
        <div class='itemPrice'>$ ${item.price}</div>
      `,
        ),
      );
    });
    return section;
  }

  function setActiveButton(active, inactive) {
    active.style.backgroundColor = "#fbbf24";
    active.style.color = "#FFF";
    inactive.style.backgroundColor = "#FFF";
    inactive.style.color = "#d97706";
  }

  function switchMenu(content, newMenu, activeBtn, inactiveBtn) {
    clearChildren(content, 1);
    content.appendChild(newMenu);
    setActiveButton(activeBtn, inactiveBtn);
  }
})();
