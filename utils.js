export function renderMonster(array) {
    const div = document.createElement('div');
    div.classList.add('monster');
    const img = document.createElement('img');
    const h4 = document.createElement('h4');
    if (array.hp === 0){
        img.src = 'assets/icons8-cute-dead-monster-96 .png';
        h4.textContent = `Ghost ${array.name} ${array.hp} HP`;

    }
    else {
        img.src = 'assets/icons8-cute-monster-96.png';
        h4.textContent = `${array.name} ${array.hp} HP`;
    }

    div.append(img, h4);
    return (div);
} 