import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';

let spaces = [
    {   title: "Important", 
        imageSrc: icon3,
    },
    {
        title: "Personal",
        imageSrc: icon4,
    },
    {
        title: "Completed",
        imageSrc: icon1,
    },
    {
        title: "All",
        imageSrc: icon2,
    },
];

export function addSpace(space){
    spaces.push(space);
}

export function getSpaces(){
    return spaces;
}