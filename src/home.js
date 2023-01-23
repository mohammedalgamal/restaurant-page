import homeImg from "./food.png";

export default function makeHomeDiv(element) {
    // eslint-disable-next-line no-param-reassign
    element.innerHTML = "";

    const homeDiv = document.createElement("div");
    homeDiv.classList = "home";

    const img = document.createElement("img");
    img.src = homeImg;
    img.alt = "Indian Food";

    homeDiv.appendChild(img);
    element.appendChild(homeDiv);
};