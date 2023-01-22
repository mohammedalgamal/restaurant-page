import homeImg from "./food.jpg";

export default function makeHomeDiv(element) {
    const homeDiv = document.createElement("div");
    homeDiv.classList = "home";

    const img = document.createElement("img");
    img.src = homeImg;
    img.alt = "Indian Food";

    homeDiv.appendChild(img);
    element.appendChild(homeDiv);
};