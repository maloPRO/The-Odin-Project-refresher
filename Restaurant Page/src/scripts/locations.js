import "../styles/locations.css";
import image1 from "../assets/about-bg.jpg";
import image2 from "../assets/bg-1.jpg";
import image3 from "../assets/contacts-bg.jpg";
import image4 from "../assets/location-bg.jpg";

export const locations = (function () {
  const locTabs = document.querySelectorAll(".location");
  const locPage = document.createElement("div");
  const main = document.querySelector(".main");
  const mobileMenu = document.querySelector(".mobile-menu");
  const images = [image1, image2, image3, image4];

  locPage.classList.add("locations-page");

  locTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const children = main.children;
      while (children.length > 1) {
        main.removeChild(children[1]);
      }
      mobileMenu.classList.toggle("hidden");
      main.appendChild(locPage);
    });
  });

  const locHead = document.createElement("div");
  locHead.classList.add("loc-head");
  locHead.innerHTML = `
        <h4>HOURS & LOCATION<h4>
    `;
  locPage.appendChild(locHead);

  const locContent = document.createElement("div");
  locContent.classList.add("loc-content");
  locContent.innerHTML = `
        <div class='stars'>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class='adress'>
            <p>14 Rue Cene </p>
            <p>Karera 11, Gitega</p>
            <p>Burundi</p>
        </div>
        <div class='time'>
            <p>OPEN MONDAY TO SATURDAY</P>
            <P>0900h - 1900h</P>
        </div>
        <div class='aob'>*(Hours may vary based on Musongati FC home games / other events)*</div>
    `;
  let idx = 0;
  locHead.style.backgroundImage = `url(${images[idx]})`;
  setInterval(() => {
    locHead.style.backgroundImage = `url(${images[idx]})`;
    idx = (idx + 1) % images.length;
  }, 5000);

  locPage.appendChild(locContent);
})();
