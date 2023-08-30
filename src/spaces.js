import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';

let spaces = [
    {   
        index: 0,
        title: "Personal", 
        imageSrc: icon4,
        container: [],
    },
    {
        index: 1,
        title: "Important",
        imageSrc: icon3,
        container: [],
    },
    {
        index:2,
        title: "Completed",
        imageSrc: icon1,
        container: [],
    },
    {
        index: 3,
        title: "All",
        imageSrc: icon2,
        container: [],
    },
];

export function addSpace(space){
    spaces.push(space);
}

export function getSpaces(){
    return spaces;
}

export function updateSpace(index, taskId){
    console.log(index, taskId)
    spaces[index].container.push(taskId);
    spaces[3].container.push(taskId);
    console.log('space updated');
    console.log(spaces);
}