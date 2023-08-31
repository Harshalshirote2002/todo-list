let tasks = [];

if (!localStorage.getItem('taskArray')) {
	storeTaskData(tasks);
} else {
	tasks = retrieveTaskData();
}

export function addTask(task) {
	tasks.push(task);
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
	localStorage.setItem('taskArray', dataJson);
}

export function retrieveTaskData() {
	const storedDataJson = localStorage.getItem('taskArray');
	return storedDataJson ? JSON.parse(storedDataJson) : [];
}

