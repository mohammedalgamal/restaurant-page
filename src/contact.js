export default function makeContactDiv(element) {
    // eslint-disable-next-line no-param-reassign
    element.innerHTML = "";
    const contactDiv = document.createElement("div");
    contactDiv.classList = "contact";
    element.appendChild(contactDiv);
};