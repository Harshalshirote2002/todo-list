import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';

let spaces = [];

if (!localStorage.getItem('spaceArray')) {
	spaces = [
		{
			index: 0,
			title: 'Personal',
			imageSrc: icon4,
			container: [],
		},
		{
			index: 1,
			title: 'Important',
			imageSrc: icon3,
			container: [],
		},
		{
			index: 2,
			title: 'Completed',
			imageSrc: icon1,
			container: [],
		},
		{
			index: 3,
			title: 'All',
			imageSrc: icon2,
			container: [],
		},
	];
	storeSpaceData(spaces);
} else {
	spaces = retrieveSpaceData();
}

// Let spaces = [
//     {
//         index: 0,
//         title: "Personal",
//         imageSrc: icon4,
//         container: [],
//     },
//     {
//         index: 1,
//         title: "Important",
//         imageSrc: icon3,
//         container: [],
//     },
//     {
//         index:2,
//         title: "Completed",
//         imageSrc: icon1,
//         container: [],
//     },
//     {
//         index: 3,
//         title: "All",
//         imageSrc: icon2,
//         container: [],
//     },
// ];

export function addSpace(space) {
	spaces.push(space);
}

export function getSpaces() {
	return spaces;
}

export function updateSpace(index, taskId, check) {
	spaces[index].container.push(parseInt(taskId, 10));
	spaces[3].container.push(parseInt(taskId, 10));
	if (check === true && !spaces[2].container.includes(parseInt(taskId, 10))) {
		spaces[2].container.push(parseInt(taskId, 10));
	}

	storeSpaceData(spaces);
}

export function updateCompleteSpace(id) {
	if (!spaces[2].container.includes(parseInt(id, 10))) {
		spaces[2].container.push(parseInt(id, 10));
	}

	storeSpaceData(spaces);
}

// Local storage

export function storeSpaceData(data) {
	const dataJson = JSON.stringify(data || []);
	localStorage.setItem('spaceArray', dataJson);
}

export function retrieveSpaceData() {
	const storedDataJson = localStorage.getItem('spaceArray');
	return storedDataJson ? JSON.parse(storedDataJson) : [];
}
