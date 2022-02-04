import { renderMonster } from './utils.js';


const form = document.getElementById('input-monster');
const monstersList = document.querySelector('.monsters');


let monsters = [
    {
        id: 1,
        name: 'Rosie',
        hp: 1,
    },
    {
        id: 2,
        name: 'Arnold',
        hp: 3,
    },
];

let currentId = 3;



form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const data = new FormData(form);
  
    const monsterName = data.get('monster-name');
  
    const newMonster = {
        id: currentId++,
        name: monsterName,
        hp: Math.ceil(Math.random() * 3),
    };
  
    monsters.push(newMonster);
  
    displayMonsters();
});

function displayMonsters() {
    monstersList.textContent = '';

    for (let monster of monsters) {
        const monsterEl = renderMonster(monster);
        monstersList.append(monsterEl);
    }
      
}

displayMonsters();