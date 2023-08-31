export default function taskMaker(id, title, description, project = ['All'], dueDate, priority, notes, check) {
	return {id, title, description, project, dueDate, priority, notes, check};
}
