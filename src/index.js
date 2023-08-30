import {updateDisplay} from "./homePage.js";
import './styles.css';

const main = updateDisplay();
const body = document.querySelector('body');
body.appendChild(main);
