/* eslint-disable no-param-reassign */
export default function makeContactDiv(element) {
    element.innerHTML = "";
    element.style.height = "55vh";
    const contactDiv = document.createElement("div");
    contactDiv.classList = "contact";
    element.appendChild(contactDiv);
};