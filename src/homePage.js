import { format, compareAsc } from 'date-fns'
import { createTaskDialog } from './taskDialog.js';
import { getTasks } from './taskData.js';
import { createSpaceDialog } from './spaceDialog.js';
import { getSpaces } from './spaces.js';
import searchIcon from './images/search.png';
import deadlineImage from './images/deadline.png';

function generateElement(type, classes = [], options) {
    const element = document.createElement(type);
    for (let someClass of classes) {
        element.classList.add(someClass);
    }
    for (const key in options) {
        if (key === 'textContent' || key === 'type' || key === 'value') {
            element[key] = options[key];
        } else {
            element.setAttribute(key, options[key]);
        }
    }
    return element;
}

const main = generateElement('main');
const sidebar = generateElement('div', ['sidebar']);
const sidebarHead = generateElement('div', ['sidebar-header'], { 'textContent': 'John Doe', });
const sidebarContent = generateElement('div', ['sidebar-content']);
const taskHolder = generateElement('div', ['task-holder']);
const taskHead = generateElement('div', ['task-header']);
const taskContent = generateElement('div', ['tasks-container']);
const addTask = generateElement('button', ['add-task']);

function callTaskDialog() {
    const dialog = document.querySelector('.add-task-dialog');
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

function callSpaceDialog() {
    const dialog = document.querySelector('.add-space-dialog');
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

function changeMode(e){
    console.log(e.target.textContent);
    updateDisplay(e.target.textContent);
}

export function updateDisplay(mode='All') {
    main.textContent = '';
    
    //--------------------------------------------Sidebar--------------------------------------------//

    //add sidebar header
    sidebar.appendChild(sidebarHead);
    taskHolder.appendChild(taskHead);
    //add search bar
    const spaces = getSpaces();
    sidebarContent.textContent = '';
    const searchBar = document.createElement('div');
    const icon1 = new Image();
    icon1.src = searchIcon;
    searchBar.classList.add('search-bar');
    icon1.classList.add('search-icon');
    searchBar.appendChild(icon1);
    sidebarContent.appendChild(searchBar);
    //add In-built labels
    let i = 0;
    for (i; i < 4; i++) {
        const space = generateElement('div', ['space']);
        const title = generateElement('p', ['space-title']);
        const icon = new Image();
        icon.classList.add('space-icon');
        title.textContent = spaces[i].title;
        icon.src = spaces[i].imageSrc;
        space.append(icon, title);
        space.addEventListener('click', changeMode);
        if(spaces[i].title === mode){
            space.classList.add('space-focus');
        }
        sidebarContent.appendChild(space);
    }
    //add New divider to separate In-built labels and custom labels
    const divider = generateElement('div', ['space-divider']);
    sidebarContent.appendChild(divider);
    //add custom labels
    for (i; i < spaces.length; i++) {
        const space = generateElement('div', ['space']);
        const title = generateElement('p', ['space-title']);
        const icon = new Image();
        icon.classList.add('space-icon');
        title.textContent = spaces[i].title;
        icon.src = spaces[i].imageSrc;
        space.append(icon, title);
        space.addEventListener('click', changeMode);
        if(spaces[i].title === mode){
            space.classList.add('space-focus');
        }
        sidebarContent.appendChild(space);
    }
    //add button to create new labels
    const addSpace = generateElement('button', ['add-space'], {
        'textContent': 'New label',
    })
    addSpace.addEventListener('click', callSpaceDialog);
    sidebarContent.appendChild(addSpace);

    //--------------------------------------------obtain current space task list--------------------------------------------//
    let taskList;
    for(const space of spaces){
        if(space.title===mode){
            taskList = space.container;
            break;
        }
    }
    //--------------------------------------------Tasks--------------------------------------------//

    //add tasks header
    taskHead.textContent = 'Tasks';
    //add button to create new task
    addTask.textContent = 'Add a task';
    addTask.addEventListener('click', callTaskDialog);
    //add tasks to display
    const tasks = getTasks();
    taskContent.textContent = '';
    for (const i of taskList) {
        const task = generateElement('div', ['task', `${i}`]);
        const marker = generateElement('button', [`task-marker`]);
        const content = generateElement('div', ['task-content']);
        const parameters = generateElement('div', ['task-parameters']);
        const title = generateElement('p', ['task-title'], {
            'textContent': tasks[i].title,
        });
        const description = generateElement('p', ['task-description'], {
            'textContent': tasks[i].description,
        });
        const deadline = generateElement('p', ['task-deadline'], {
            'textContent': `${format((new Date(tasks[i].dueDate)), 'dd-MMM/yy')}`,
        });
        const deadlineIcon = new Image();
        deadlineIcon.src = deadlineImage;
        deadline.append(deadlineIcon);
        //
        let priority;
        if(tasks[i].priority<=3){
            priority = generateElement('p', ['task-priority', 'low-priority'], {
                'textContent': `low priority`,
            });
        }else if(tasks[i].priority<=6 && tasks[i].priority>3){
            priority = generateElement('p', ['task-priority', 'mid-priority'], {
                'textContent': `mid priority`,
            });
        }else{
            priority = generateElement('p', ['task-priority', 'high-priority'], {
                'textContent': `high priority`,
            });
        }
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
    const taskDialog = createTaskDialog();
    const spaceDialog = createSpaceDialog();
    main.append(sidebar, taskHolder, taskDialog, spaceDialog);
    console.log(tasks);
    return main;
}

