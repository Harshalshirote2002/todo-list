import './kit.fontawesome.js';

export default function createFooter(){
    const footer = document.createElement('footer');
    footer.textContent = `Copyright © ${new Date().getFullYear()} HarshalShirote`;
    const a = document.createElement('a');
    a.href = 'https://github.com/Harshalshirote2002';
    a.target = '_blank';
    const i = document.createElement('i');
    i.classList.add('fab');
    i.classList.add('fa-github');
    i.ariaHidden = true;
    a.appendChild(i);
    footer.appendChild(a);
    return footer;
}