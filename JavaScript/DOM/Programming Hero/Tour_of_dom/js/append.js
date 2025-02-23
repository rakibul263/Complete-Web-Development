const placesList = document.getElementById('places-list');
// console.log(placesList);
const li = document.createElement('li');
li.innerText = 'Bangladesh';

placesList.appendChild(li);

// where to add
const mainContainer = document.getElementById('main-container');

// what to add
const section = document.createElement('section');

const h1 = document.createElement('h1');
h1.innerText = 'University Name:'

section.appendChild(h1);
const ul = document.createElement('ul');
const li1 = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')
li1.innerText = 'Daffodil';
li2.innerText = 'International';
li3.innerText = 'University';
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

section.appendChild(ul);
mainContainer.appendChild(section);