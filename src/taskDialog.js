import taskMaker from "./taskFactory.js";
import { addTask } from "./taskData.js";
import { updateTaskDisplay } from "./homePage.js";
const dialog = document.createElement('dialog');
const form = document.createElement('form');
const title = document.createElement('input');
const description = document.createElement('input');
const project = document.createElement('input');
const dueDate = document.createElement('input');
const priority = document.createElement('input');
const notes = document.createElement('input');
const check = document.createElement('input');
const titleLabel = document.createElement('label');
const descriptionLabel = document.createElement('label');
const projectLabel = document.createElement('label');
const dueDateLabel = document.createElement('label');
const priorityLabel = document.createElement('label');
const notesLabel = document.createElement('label');
const checkLabel = document.createElement('label');
const submit = document.createElement('button');
const cancel = document.createElement('button');
const titleDiv = document.createElement('div');
const descriptionDiv = document.createElement('div');
const projectDiv = document.createElement('div');
const dueDateDiv = document.createElement('div');
const priorityDiv = document.createElement('div');
const notesDiv = document.createElement('div');
const checkDiv = document.createElement('div');
const buttonDiv = document.createElement('div');
title.id = 'title';
description.id = 'description';
project.id = 'project';
dueDate.id = 'dueDate';
priority.id = 'priority';
notes.id = 'notes';
check.id = 'check';
titleLabel.setAttribute('for', 'title');
descriptionLabel.setAttribute('for', 'description');
projectLabel.setAttribute('for', 'project');
dueDateLabel.setAttribute('for', 'dueDate');
priorityLabel.setAttribute('for', 'priority');
notesLabel.setAttribute('for', 'notes');
checkLabel.setAttribute('for', 'check');
titleLabel.textContent = 'title: ';
descriptionLabel.textContent = 'description: ';
projectLabel.textContent = 'project: ';
dueDateLabel.textContent = 'due date: ';
priorityLabel.textContent = 'priority: ';
notesLabel.textContent = 'notes: ';
checkLabel.textContent = 'completed: ';
title.type = 'text';
description.type = 'text';
project.type = 'text';
priority.type = 'range';
priority.min = '1';
priority.max = '10';
priority.value = '3';
dueDate.type = 'date';
notes.type = 'text';
check.type = 'checkbox';
submit.type = 'submit';
cancel.type = 'reset';
submit.textContent = 'add';
cancel.textContent = 'cancel';
cancel.addEventListener('click', cancelEvent);
title.required = true;
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
        updateTaskDisplay();
        form.reset();
        dialog.close();
    }
}

function cancelEvent() {
    form.reset();
    dialog.close();
}

export function createDialog() {
    return dialog;
}