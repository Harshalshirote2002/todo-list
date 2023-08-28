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
    sidebarHead.textContent = 'Menu';
    sidebarContent.classList.add('sidebar-content');
    taskHolder.classList.add('task-holder');
    taskHead.classList.add('task-header');
    taskHead.textContent = 'Tasks';
    taskContent.classList.add('task-content');
    addTask.classList.add('add-task')

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

    for (let i = 0; i < 12; i++) {
        const task = document.createElement('div');
        const marker = document.createElement('button');
        const content = document.createElement('div');
        const parameters = document.createElement('div');
        const title = document.createElement('p');
        const description = document.createElement('p');
        const deadline = document.createElement('p');
        const priority = document.createElement('p');
        task.classList.add('task');
        task.classList.add(`${i}`);
        marker.classList.add(`task-marker`);
        content.classList.add('task-content');
        title.classList.add('task-title');
        description.classList.add('task-description');
        parameters.classList.add('task-parameters');
        deadline.classList.add('task-deadline');
        priority.classList.add('task-priority');
        title.textContent = 'title';
        description.textContent = 'description';
        deadline.textContent = 'd...';
        priority.textContent = 'p...';
        content.append(title, description);
        parameters.append(deadline, priority);
        task.append(marker, content, parameters);
        taskHolder.appendChild(task);
    }

    
    sidebar.appendChild(sidebarContent);
    main.append(sidebar, taskHolder, addTask);
    return main;
}