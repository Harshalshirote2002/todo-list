import taskMaker from "./taskFactory.js";
import { addTask } from "./taskData.js";
import { updateDisplay } from "./homePage.js";

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

const description = generateElement('input', {
    'id': 'description',
    'type': 'text',
});

const project = generateElement('input', {
    'id': 'project',
    'type': 'text',
});

const dueDate = generateElement('input', {
    'id': 'dueDate',
    'type': 'date',
});

const priority = generateElement('input', {
    'id': 'priority',
    'type': 'range',
    'min': '1',
    'max': '10',
    'value': '2',

});

const notes = generateElement('input', {
    'id': 'notes',
    'type': 'text',
});

const check = generateElement('input', {
    'id': 'check',
    'type': 'checkbox'
});

const titleLabel = generateElement('label', {
    'for': 'title',
    'textContent': 'Title:',
});

const descriptionLabel = generateElement('label', {
    'for': 'description',
    'textContent': 'Description:',
});

const projectLabel = generateElement('label', {
    'for': 'project',
    'textContent': 'Project:',
});

const dueDateLabel = generateElement('label', {
    'for': 'dueDate',
    'textContent': 'Due date:',
});

const priorityLabel = generateElement('label', {
    'for': 'priority',
    'textContent': 'Priority:',
});

const notesLabel = generateElement('label', {
    'for': 'notes',
    'textContent': 'Notes:',
});

const checkLabel = generateElement('label', {
    'for': 'check',
    'textContent': 'Completed:'
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
const descriptionDiv = document.createElement('div');
const projectDiv = document.createElement('div');
const dueDateDiv = document.createElement('div');
const priorityDiv = document.createElement('div');
const notesDiv = document.createElement('div');
const checkDiv = document.createElement('div');
const buttonDiv = document.createElement('div');

cancel.addEventListener('click', cancelEvent);

titleDiv.append(titleLabel, title);
descriptionDiv.append(descriptionLabel, description);
projectDiv.append(projectLabel, project);
priorityDiv.append(priorityLabel, priority);
dueDateDiv.append(dueDateLabel, dueDate);
notesDiv.append(notesLabel, notes);
checkDiv.append(checkLabel, check);
buttonDiv.append(submit, cancel);

form.append(titleDiv, descriptionDiv, projectDiv, priorityDiv, dueDateDiv, notesDiv, checkDiv, buttonDiv);
form.method = 'dialog';
form.classList.add('add-task-form');
dialog.classList.add('add-task-dialog');
form.addEventListener('submit', submitEvent);
dialog.appendChild(form);

function submitEvent(e) {
    e.preventDefault();
    if (form.checkValidity()) {
        console.log("task was added!");
        addTask(taskMaker(title.value, description.value, project.value, dueDate.value, priority.value, notes.value, check.value));
        updateDisplay();
        form.reset();
        dialog.close();
    }
}

function cancelEvent() {
    form.reset();
    dialog.close();
}

export function createTaskDialog() {
    return dialog;
}
