let tasks = [];

if (!localStorage.getItem("taskArray")) {
  storeTaskData(tasks);
} else {
  tasks = retrieveTaskData();
  console.log(tasks);
}

export function addTask(task) {
  tasks.push(task);
  console.log(tasks);
  storeTaskData(tasks);
}

export function getTasks() {
  return tasks;
}

export function updateTask(index) {
  tasks[index].check = true;
}

export function storeTaskData(data) {
  const dataJson = JSON.stringify(data || []);
  console.log(`data JSON: ${dataJson}`);
  localStorage.setItem("taskArray", dataJson);
}

export function retrieveTaskData() {
  const storedDataJson = localStorage.getItem("taskArray");
  return storedDataJson ? JSON.parse(storedDataJson) : [];
}


