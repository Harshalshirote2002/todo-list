import createHome from "./homePage.js";
import './styles.css';

const main = createHome();
const body = document.querySelector('body');
body.appendChild(main);
