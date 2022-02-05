import { renderMonster } from './utils.js';


const form = document.getElementById('input-monster');
const monstersList = document.querySelector('.monsters');
const defeatedMonstersSpan = document.getElementById('defeated-monsters');
const fairyHP = document.getElementById('hp');
const userAction = document.getElementById('user-actions');
const monsterAction = document.getElementById('monster-actions');
const modalClass = document.querySelector('.modal-hidden');
const closeBtn = document.getElementById('close');

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
            modalClass.classList.add('visible');
            monsterClickHandler(monster);
        });

        monstersList.append(monsterEl);
    }
      
}

displayMonsters();

function monsterClickHandler(monsterData) {
    
    console.log('clicking');
    if (monsterData.hp === 0) return;
    if (userHP === 0) {
        alert('You lost. 😩 Game Over.');
        return;
    }

    let userRand = Math.ceil(Math.random() * 10);
    if (userRand < 5) {
        monsterData.hp--;
    
        const userHit = new Audio('assets/541477__eminyildirim__magic-earth-spell-impact-punch.wav');
        userHit.play();
        userAction.textContent = (`Your spell hit ${monsterData.name}!`);
    }
    else {
        const userMiss = new Audio('assets/577965__colorscrimsontears__rpgpowerup.wav');
        userMiss.play();
        userAction.textContent = (`${monsterData.name} deflected your spell!`);
    }
    displayMonsters();
  
    
    setTimeout(() => {
        let monsterRand = Math.ceil(Math.random() * 10);
        if (monsterRand > 6) {
            userHP--;
      
            const monsterHit = new Audio('/assets/541478__eminyildirim__magic-fire-spell-impact-punch.wav');
            monsterHit.play();
            monsterAction.textContent = (`${monsterData.name} got past your forcefield spell!`);
        }
        else {
            const monsterMiss = new Audio('assets/253176__suntemple__retro-spell-sfx.wav');
            monsterMiss.play();
            monsterAction.textContent = (`${monsterData.name} missed you! Your forcefield spell worked.`);
        }
        fairyHP.textContent = userHP;
    }, 1500
    );

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

closeBtn.addEventListener('click', () => {
    modalClass.classList.remove('visible');
});