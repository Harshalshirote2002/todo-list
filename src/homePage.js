import {createDialog, submitEvent} from './taskDialog.js';

function callDialog(){
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

function viewDropdown(e){
    const allTasks = Array.from(document.querySelectorAll('.task'));
    allTasks.forEach((task) =>  {
        if(Array.from(task.classList).includes('task-dropdown-active')){
            if(!(e.target==task)){
                task.classList.remove('task-dropdown-active');
            }
        }
    });
    if(Array.from(e.target.classList).includes('task-dropdown-active')){
        e.target.classList.remove('task-dropdown-active');
    }else{
        e.target.classList.add('task-dropdown-active');
    }
}

export default function createHome(){
    const main = document.createElement('main');
    const sidebar = document.createElement('div');
    const sidebarHead = document.createElement('div');
    const sidebarContent = document.createElement('div');
    const taskHolder = document.createElement('div');
    const taskHead = document.createElement('div');
    const taskContent = document.createElement('div');
    const addTask = document.createElement('button');
    sidebar.classList.add('sidebar');
    sidebarHead.classList.add('sidebar-header');
    sidebarHead.textContent = 'John Doe';
    sidebarContent.classList.add('sidebar-content');
    taskHolder.classList.add('task-holder');
    taskHead.classList.add('task-header');
    taskHead.textContent = 'Tasks';
    taskContent.classList.add('tasks-container');
    addTask.classList.add('add-task')
    addTask.textContent = 'Add a task';
    addTask.addEventListener('click', callDialog);

    sidebar.appendChild(sidebarHead);
    taskHolder.appendChild(taskHead);
    
    for (let i = 0; i < 4; i++) {
        const space = document.createElement('div');
        const title = document.createElement('p');
        space.classList.add('space');
        title.classList.add('space-title');
        title.textContent = 'title';
        space.appendChild(title);
        sidebarContent.appendChild(space);
    }

    for (let i = 0; i < 4; i++) {
        const task = document.createElement('div');
        const marker = document.createElement('button');
        const content = document.createElement('div');
        const parameters = document.createElement('div');
        const title = document.createElement('p');
        const description = document.createElement('p');
        const deadline = document.createElement('p');
        const priority = document.createElement('p');
        const notes = document.createElement('div');
        task.classList.add('task');
        task.classList.add(`${i}`);
        marker.classList.add(`task-marker`);
        content.classList.add('task-content');
        title.classList.add('task-title');
        description.classList.add('task-description');
        parameters.classList.add('task-parameters');
        deadline.classList.add('task-deadline');
        priority.classList.add('task-priority');
        notes.classList.add('task-notes');
        title.textContent = 'title';
        description.textContent = 'description';
        deadline.textContent = 'd...';
        priority.textContent = 'p...';
        notes.textContent = 'lorem ipsum dolor ';
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
    return main;
}

let tasks = [];