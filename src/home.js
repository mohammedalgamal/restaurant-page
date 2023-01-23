/* eslint-disable no-param-reassign */
import homeImg from "./food.png";

export default function makeHomeDiv(element) {
  element.innerHTML = "";
  element.style.height = "55vh";

  const homeDiv = document.createElement("div");
  homeDiv.classList = "home";

  const homeTitle = document.createElement("div");
  homeTitle.classList = "homeTitle";
  homeTitle.innerHTML = "Indian food as it should be";

  const homeSecondTitle = document.createElement("div");
  homeSecondTitle.classList = "homeSecondTitle";
  homeSecondTitle.innerHTML = "Quality has a name!";

  const img = document.createElement("img");
  img.src = homeImg;
  img.alt = "Indian Food";

  const homeOrder = document.createElement("div");
  homeOrder.classList = "homeOrder";
  homeOrder.innerHTML = "Order Now and get 15% off!";

  homeDiv.appendChild(homeTitle);
  homeDiv.appendChild(homeSecondTitle);
  homeDiv.appendChild(img);
  homeDiv.appendChild(homeOrder);
  element.appendChild(homeDiv);
}
