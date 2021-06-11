import {renderHomePage} from './mainLoad.js';
import {renderContactPage} from './contact.js';
import { renderMenuPage } from './menu.js';


let bodyEl = document.querySelector('body');
let navEl = document.createElement('nav');

navEl.innerHTML = `
  <button >Home</button>
  <button > Menu </button>
  <button > Contact </button>
`;


let mainContent = document.querySelector('#content');

bodyEl.insertBefore(navEl, bodyEl.firstChild);
renderHomePage();
console.log('first webpack hit');

let buttonElements= Array.from(document.querySelectorAll('button'));
console.log(buttonElements);
buttonElements.forEach(element => element.addEventListener('click', handleClick));

function handleClick(e) {
    mainContent.innerHTML='';
    if (e.target.innerText == 'Contact') {
        renderContactPage();
    }
    else if (e.target.innerText == 'Home') {
        renderHomePage();
    }
    else {
        renderMenuPage();
    }
}