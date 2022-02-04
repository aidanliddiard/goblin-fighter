import { renderMonster } from './utils.js';


const form = document.getElementById('input-monster');
const monstersList = document.querySelector('.monsters');
const defeatedMonstersSpan = document.getElementById('defeated-monsters');
const fairyHP = document.getElementById('hp');

let userHP = 10;
let defeatedMonsters = 0;

let monsters = [
    {
        id: 1,
        name: 'Rosie',
        hp: 5,
    },
    {
        id: 2,
        name: 'Arnold',
        hp: 2,
    },
];

let currentId = 3;



form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (userHP === 0) return;
  
    const data = new FormData(form);
  
    const monsterName = data.get('monster-name');
  
    const newMonster = {
        id: currentId++,
        name: monsterName,
        hp: Math.ceil(Math.random() * 4),
    };
  
    monsters.push(newMonster);
  
    displayMonsters();
});

function displayMonsters() {
    monstersList.textContent = '';

    for (let monster of monsters) {
        const monsterEl = renderMonster(monster);

        monsterEl.addEventListener('click', () => {
            monsterClickHandler(monster);
        });

        monstersList.append(monsterEl);
    }
      
}

displayMonsters();

function monsterClickHandler(monsterData) {
    if (monsterData.hp === 0) return;
    if (userHP === 0) {
        alert('You lost. 😩 Game Over.');
        return;
    }

    let userRand = Math.ceil(Math.random() * 10);
    if (userRand < 5) {
        //console.log('i hit' + userRand);
        monsterData.hp--;
        //console.log(monsterData.hp);
        alert(`Your spell hit ${monsterData.name}!`);
    }
    else {
        alert(`Your spell missed ${monsterData.name}!`);
    }
    displayMonsters();
  
    let monsterRand = Math.ceil(Math.random() * 10);
    if (monsterRand > 6) {
        //console.log('they hit' + monsterRand);
        userHP--;
        //console.log(userHP);
        alert(`${monsterData.name} hit you!`);
    }
    else {
        alert(`${monsterData.name} missed you!`);
    }
    fairyHP.textContent = userHP;

    if (monsterData.hp === 0) {
        defeatedMonsters++;
        if (defeatedMonsters === 1) {
            defeatedMonstersSpan.textContent = `${defeatedMonsters} monster`;
        }
        else {
            defeatedMonstersSpan.textContent = `${defeatedMonsters} monsters`;
        }
    }

    if (defeatedMonsters === 3) {
        alert('You win! 🎉🎉🎉');
    }

    if (defeatedMonsters > 3) {
        alert(`You win again! 🎉🎉🎉 Clearly you don't want to stop!`);
    }

}