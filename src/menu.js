/* eslint-disable no-param-reassign */
export default function makeMenuDiv(element) {
    element.innerHTML = "";
    const menuDiv = document.createElement("div");
    menuDiv.classList = "menu";
    element.style.height = "100vh";
    element.appendChild(menuDiv);
};