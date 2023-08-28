export default function createHeader(){
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'QuestQueue';
    const links = document.createElement('ul');
    const home = document.createElement('li');
    const contact = document.createElement('li');
    const about = document.createElement('li');
    home.textContent = 'Home';
    contact.textContent = 'Contact us';
    about.textContent = 'About';
    links.append(home, contact, about);
    header.appendChild(h1);
    header.appendChild(links);
    return header;
}