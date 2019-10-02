/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

const header = document.querySelector('.header');
const menuButton = document.querySelector('.menu-button');

function menuFactory(items) {

  // creating elements
  const menu = document.createElement('div');
  const ul = document.createElement('ul');

  // setting the structure
 menu.appendChild(ul);

  //setting the content
  menuItems.forEach((i) => {
    const li = document.createElement('li');
    li.textContent = i; 
    ul.appendChild(li);
  })

  // applying styles
  menu.classList.add('menu');

  // adding the event handler
  menuButton.addEventListener('click', (e) => {
    menu.classList.toggle('menu--open');
  })    

  return menu;
}

// tying in to the header
header.appendChild(menuFactory(menuItems));