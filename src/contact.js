/* eslint-disable no-param-reassign */
export default function makeContactDiv(element) {
    element.innerHTML = "";
    element.style.height = "55vh";

    const contactDiv = document.createElement("div");
    contactDiv.classList = "contact";

    const address = document.createElement("div");
    address.classList = "address";
    address.innerHTML = "15 Albata St. India";

    const phone = document.createElement("div");
    phone.classList = "phone";
    phone.innerHTML = "+20 50 123 458";

    const workingHours = document.createElement("div");
    workingHours.classList = "hours";
    workingHours.innerHTML = "Saturday - Wednesday: 9AM - 11PM";

    const weekend = document.createElement("div");
    weekend.classList = "weekend";
    weekend.innerHTML = "Thursday - Friday: 9AM - 1AM";

    contactDiv.appendChild(address);
    contactDiv.appendChild(phone);
    contactDiv.appendChild(workingHours);
    contactDiv.appendChild(weekend);
    element.appendChild(contactDiv);
};