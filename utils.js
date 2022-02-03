export function renderMonster(array) {
    const div = document.createElement('div');
    div.classList.add('monster');
    const img = document.createElement('img');
    img.src = 'assets/icons8-cute-monster-96.png';
    const h4 = document.createElement('h4');
    h4.textContent = `${array.name} ${array.hp} HP`;

    div.append(img, h4);
    return (div);
} 