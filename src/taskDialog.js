import taskMaker from "./taskFactory.js";
import { addTask } from "./taskData.js";
import { getSpaces } from "./spaces.js";
import { updateDisplay } from "./homePage.js";
import { updateSpace } from "./spaces.js";
let id = 0;

function generateElement(type, options) {
    let element = document.createElement(type);
    for (const key in options) {
        if (key === 'textContent' || key === 'type' || key === 'value') {
            element[key] = options[key];
        } else {
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

const list = generateElement('select', {
    'id': 'list',
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

const listLabel = generateElement('label', {
    'for': 'list',
    'textContent': 'Label as:',
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
const listDiv = document.createElement('div');
const dueDateDiv = document.createElement('div');
const priorityDiv = document.createElement('div');
const notesDiv = document.createElement('div');
const checkDiv = document.createElement('div');
const buttonDiv = document.createElement('div');

cancel.addEventListener('click', cancelEvent);

titleDiv.append(titleLabel, title);
descriptionDiv.append(descriptionLabel, description);
listDiv.append(listLabel, list);
priorityDiv.append(priorityLabel, priority);
dueDateDiv.append(dueDateLabel, dueDate);
notesDiv.append(notesLabel, notes);
checkDiv.append(checkLabel, check);
buttonDiv.append(submit, cancel);

form.append(titleDiv, descriptionDiv, listDiv, priorityDiv, dueDateDiv, notesDiv, checkDiv, buttonDiv);
form.method = 'dialog';
form.classList.add('add-task-form');
dialog.classList.add('add-task-dialog');
form.addEventListener('submit', submitEvent);
dialog.appendChild(form);

function spaceUpdater(task){
    console.log('space updater called');
    const spaces = getSpaces();
    for(const space of spaces){
        if(space.title===task.project){
            updateSpace(space.index, task.id);
            return;
        }
    }
    console.log('space not found! ');
}

function submitEvent(e) {
    e.preventDefault();
    if (form.checkValidity()) {
        console.log("task was added!");
        let task = taskMaker(id, title.value, description.value, list.value, dueDate.value, priority.value, notes.value, check.value);
        addTask(task);
        spaceUpdater(task)
        updateDisplay();
        form.reset();
        dialog.close();
        id++;
        console.log(id);
    }
}

function cancelEvent() {
    form.reset();
    dialog.close();
}

export function createTaskDialog() {
    let spaces = getSpaces();
    console.log(spaces);
    list.textContent='';
    for (const space of spaces) {
        if (space.title === 'All' || space.title === 'Completed') {
            continue;
        }
        const option = generateElement('option', {
            'value': space.title,
            'textContent': space.title,
        })
        list.appendChild(option);
    }
    return dialog;
}
