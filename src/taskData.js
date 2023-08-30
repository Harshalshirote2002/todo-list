let tasks = [];

export function addTask(task) {
  tasks.push(task);
}

export function getTasks() {
  return tasks;
}

export function updateTask(index){
  tasks[index].check = true;
}