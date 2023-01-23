/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import img from "./biryani.jpg";


export default function makeMenuDiv(element) {
    element.innerHTML = "";
    element.style.height = "max-content";

    const menuDiv = document.createElement("div");
    menuDiv.classList = "menu";

    for (let index = 0; index < 6; index++) {
        const menuItem = document.createElement("div");
        menuItem.classList = "item";

        const menuItemLeft = document.createElement("div");
        menuItemLeft.classList = "itemLeft";

        const itemImg = document.createElement("img");
        itemImg.src = img;
        itemImg.alt = "Biryani image";
        itemImg.classList = "itemImg";

        const menuItemRight = document.createElement("div");
        menuItemRight.classList = "itemRight";

        const itemTitle = document.createElement("div");
        itemTitle.classList = "title";
        itemTitle.innerHTML = "Butter Chicken";

        const itemDescription = document.createElement("div");
        itemDescription.classList = "description";
        itemDescription.innerHTML = `Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit. 
                                    Curabitur nec neque`;


        menuItemLeft.appendChild(itemImg);
        menuItemRight.appendChild(itemTitle);
        menuItemRight.appendChild(itemDescription);
        menuItem.appendChild(menuItemLeft);
        menuItem.appendChild(menuItemRight);
        menuDiv.appendChild(menuItem);
    };


    element.appendChild(menuDiv);
};