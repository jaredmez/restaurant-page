import {renderHomePage} from './mainLoad.js';
import {renderContactPage} from './contact.js';


let bodyEl = document.querySelector('body');
let navEl = document.createElement('nav');

navEl.innerHTML = `
  <a >Home</a>
  <a > Menu </a>
  <a > Contact </a>
`;
bodyEl.insertBefore(navEl, bodyEl.firstChild);
renderHomePage();
console.log('first webpack hit');
