import {updateTaskDisplay} from "./homePage.js";
import './styles.css';

const main = updateTaskDisplay();
const body = document.querySelector('body');
body.appendChild(main);
