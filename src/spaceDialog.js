import { addSpace } from "./spaces.js";
import { updateDisplay } from "./homePage.js";
import listIcon from './images/list.png';
import { updateSpace } from "./spaces.js";
let indexCounter = 3;

function capitalizeFirstLetter(inputString) {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

function generateElement(type, options){
    let element = document.createElement(type);
    for(const key in options){
        if(key==='textContent' || key==='type' || key==='value'){
            element[key] = options[key];
        }else{
            element.setAttribute(key, options[key]);
        }
    }
    return element;
}

const dialog = document.createElement('dialog');
const form = document.createElement('form');

const title = generateElement('input', {
    'id': 'title',
    'type': 'text',
    'required': true,
});

const color = generateElement('input', {
    'id': 'color',
    'type': 'color',
    'required': true,
});

const titleLabel = generateElement('label', {
    'for': 'title',
    'textContent': 'Title:',
});

const colorLabel = generateElement('label', {
    'for': 'color',
    'textContent': 'color:',
});

const submit = generateElement('button', {
    'type': 'submit',
    'textContent': 'Add',
});

const cancel = generateElement('button', {
    'type': 'reset',
    'textContent': 'Cancel',
});

const titleDiv = document.createElement('div');
const colorDiv = document.createElement('div');
const buttonDiv = document.createElement('div');

cancel.addEventListener('click', cancelEvent);

titleDiv.append(titleLabel, title);
colorDiv.append(colorLabel, color);
buttonDiv.append(submit, cancel);

form.append(titleDiv, colorDiv, buttonDiv);
form.method = 'dialog';
form.classList.add('add-space-form');
dialog.classList.add('add-space-dialog');
form.addEventListener('submit', submitEvent);
dialog.appendChild(form);

function submitEvent(e) {
    e.preventDefault();
    if (form.checkValidity()) {
        addSpace({
            index: ++indexCounter,
            title: capitalizeFirstLetter(title.value),
            imageSrc: listIcon,
            container: [],
        });
        updateDisplay();
        form.reset();
        dialog.close();
    }
}

function cancelEvent() {
    form.reset();
    dialog.close();
}

export function createSpaceDialog() {
    return dialog;
}
