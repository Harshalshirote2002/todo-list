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
        const workSpace = document.createElement('div');
        task.classList.add('task');
        workSpace.classList.add('work-space');
        task.textContent=`task ${i+1}`;
        workSpace.textContent=`Workspace ${i+1}`;
        taskHolder.appendChild(task);
        workSpaceHolder.appendChild(workSpace);
    }





    main.append(taskHolder, workSpaceHolder, addTask);
    return main;
}