import { createDialog } from './taskDialog.js';
import { getTasks } from './taskData.js';
import { getSpaces } from './spaces.js';
import searchIcon from './images/search.png'

function generateElement(type, classes=[], options){
    const element = document.createElement(type);
    for(let someClass of classes){
        element.classList.add(someClass);
    }
    for(const key in options){
        if(key==='textContent' || key==='type' || key==='value'){
            element[key] = options[key];
        }else{
            element.setAttribute(key, options[key]);
        }
    }
    return element;
}

const main = generateElement('main');
const sidebar = generateElement('div', ['sidebar']);
const sidebarHead = generateElement('div', ['sidebar-header'], {'textContent': 'John Doe',});
const sidebarContent = generateElement('div', ['sidebar-content']);
const taskHolder = generateElement('div', ['task-holder']);
const taskHead = generateElement('div', ['task-header']);
const taskContent = generateElement('div', ['tasks-container']);
const addTask = generateElement('button', ['add-task']);

function callDialog() {
    const dialog = document.querySelector('dialog');
    dialog.showModal();
    const dialogWidth = dialog.offsetWidth;
    const dialogHeight = dialog.offsetHeight;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const leftPosition = viewportWidth / 2 - dialogWidth / 2;
    const topPosition = viewportHeight / 2 - dialogHeight / 2;
    dialog.style.left = `${leftPosition}px`;
    dialog.style.top = `${topPosition}px`;
}

function viewDropdown(e) {
    const allTasks = Array.from(document.querySelectorAll('.task'));
    allTasks.forEach((task) => {
        if (Array.from(task.classList).includes('task-dropdown-active')) {
            if (!(e.target == task)) {
                task.classList.remove('task-dropdown-active');
            }
        }
    });
    if (Array.from(e.target.classList).includes('task-dropdown-active')) {
        e.target.classList.remove('task-dropdown-active');
    } else {
        e.target.classList.add('task-dropdown-active');
    }
}

export function updateTaskDisplay() {
    main.textContent='';
    taskHead.textContent = 'Tasks';
    addTask.textContent = 'Add a task';
    addTask.addEventListener('click', callDialog);
    sidebar.appendChild(sidebarHead);
    taskHolder.appendChild(taskHead);

    const spaces = getSpaces();
    sidebarContent.textContent='';
    const searchBar = document.createElement('div');
    const icon1 = new Image();
    icon1.src = searchIcon;
    searchBar.classList.add('search-bar');
    icon1.classList.add('search-icon');
    searchBar.appendChild(icon1);
    sidebarContent.appendChild(searchBar);
    for (let i = 0; i < spaces.length; i++) {
        const space = generateElement('div', ['space']);
        const title = generateElement('p', ['space-title']);
        const icon = new Image();
        icon.classList.add('space-icon');
        title.textContent = spaces[i].title;
        icon.src = spaces[i].imageSrc;
        space.append(icon, title);
        sidebarContent.appendChild(space);
    }
    const divider = generateElement('div', ['space-divider']);
    sidebarContent.appendChild(divider);

    const tasks = getTasks();
    taskContent.textContent='';
    for (let i = 0; i < tasks.length; i++) {
        const task = generateElement('div', ['task', `${i}`]);
        const marker = generateElement('button', [`task-marker`]);
        const content = generateElement('div', ['task-content']);
        const parameters = generateElement('div', ['task-parameters']);
        const title = generateElement('p', ['task-title'], {
            'textContent':tasks[i].title,
        });
        const description = generateElement('p', ['task-description'], {
            'textContent': tasks[i].description,
        });
        const deadline = generateElement('p', ['task-deadline'], {
            'textContent': tasks[i].deadline,
        });
        const priority = generateElement('p', ['task-priority'], {
            'textContent': tasks[i].priority,
        });
        const notes = generateElement('div', ['task-notes'], {
            'textContent': tasks[i].notes,
        });
        content.append(title, description);
        parameters.append(deadline, priority);
        task.append(marker, content, parameters, notes);
        task.addEventListener('click', viewDropdown);
        taskContent.appendChild(task);
    }
    taskHolder.appendChild(taskContent);
    taskHolder.appendChild(addTask);
    sidebar.appendChild(sidebarContent);
    const dialog = createDialog();
    main.append(sidebar, taskHolder, dialog);
    console.log(tasks);
    return main;
}
