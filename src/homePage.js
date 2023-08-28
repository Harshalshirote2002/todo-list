export default function createHome(){
    const main = document.createElement('main');    
    const taskHolder = document.createElement('div');
    const workSpaceHolder = document.createElement('div');
    taskHolder.classList.add('task-holder');
    workSpaceHolder.classList.add('workspace-holder');
    const addTask = document.createElement('button');
    addTask.classList.add('add-task');
    addTask.textContent = 'Add Task';
    const taskHead = document.createElement('div');
    taskHead.classList.add('task-header');
    taskHead.textContent = 'Tasks';
    const workSpaceHead = document.createElement('div');
    workSpaceHead.classList.add('workspace-header');
    workSpaceHead.textContent = 'Workspaces';
    taskHolder.appendChild(taskHead);
    workSpaceHolder.appendChild(workSpaceHead);
    for(let i=0; i<12; i++){
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
        title.textContent='title';
        description.textContent='description';
        deadline.textContent='d...';
        priority.textContent='p...';
        content.append(title, description);
        parameters.append(deadline, priority);
        task.append(marker, content, parameters);
        taskHolder.appendChild(task);
    }

    const spaceContent = document.createElement('div');
    spaceContent.classList.add('space-content');
    for(let i=0; i<4; i++){
        const space = document.createElement('div');
        const title = document.createElement('p');
        space.classList.add('space');
        title.classList.add('space-title');
        title.textContent='title';
        space.appendChild(title);
        spaceContent.appendChild(space);
    }

    workSpaceHolder.appendChild(spaceContent);





    main.append(taskHolder, workSpaceHolder, addTask);
    return main;
}