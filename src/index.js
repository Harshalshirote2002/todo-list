import createHome from "./homePage.js";
import createFooter from "./commonFooter.js";
import './styles.css';

const main = createHome();
const footer = createFooter();
const body = document.querySelector('body');
body.appendChild(main);
