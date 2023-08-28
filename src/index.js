import createHeader from "./commonHeader.js";
import createHome from "./homePage.js";
import createFooter from "./commonFooter.js";
import './styles.css';

const header = createHeader();
const main = createHome();
const footer = createFooter();
const body = document.querySelector('body');
body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);