import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import gitHubImg from "./GitHub-Mark-Light-32px.png";
import makeHomeDiv from "./home";

// Add header and its content
const header = document.createElement("div");
header.className = "header";

const headerUpper = document.createElement("div");
headerUpper.className = "upper";
headerUpper.innerHTML = "Topaz";

const headerLower = document.createElement("div");
headerLower.className = "lower";

const homeBtn = document.createElement("button");
homeBtn.classList = "home-btn btn active";
homeBtn.innerHTML = "Home";

const menuBtn = document.createElement("button");
menuBtn.classList = "menu-btn btn";
menuBtn.innerHTML = "Menu";

const contactBtn = document.createElement("button");
contactBtn.classList = "contact-btn btn";
contactBtn.innerHTML = "Contact";

header.appendChild(headerUpper);
headerLower.appendChild(homeBtn);
headerLower.appendChild(menuBtn);
headerLower.appendChild(contactBtn);
header.appendChild(headerLower);
document.body.appendChild(header);

// Add main section 'content' and its content
const content = document.createElement("div");
content.className = "content";
makeHomeDiv(content);
document.body.appendChild(content);

// Add footer and its content
const footer = document.createElement("div");
footer.className = "footer";

const footerText = document.createElement("div");
footerText.className = "text";
footerText.innerHTML = "Copyright &#169 mohammedalgamal";

const footerImgLink = document.createElement("a");
footerImgLink.href = "https://github.com/mohammedalgamal/restaurant-page";

const footerImg = document.createElement("img");
footerImg.src = gitHubImg;
footerImg.alt = "GitHub Logo";

footerImgLink.appendChild(footerImg);
footerText.appendChild(footerImgLink);
footer.appendChild(footerText);
document.body.appendChild(footer);
