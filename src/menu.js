export default function makeMenuDiv(element) {
    // eslint-disable-next-line no-param-reassign
    element.innerHTML = "";
    const menuDiv = document.createElement("div");
    menuDiv.classList = "menu";
    element.appendChild(menuDiv);
};