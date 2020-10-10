import {victims} from './formattedData.js';

const spanContainer = document.getElementById('span-container');

function colorize(array, index) {
    let lightness = 100;
    let color = `hsl(4, 100%, ${lightness}%)`;
    
    return color;
}

function fillContainer() {
    victims.forEach((victim, index) => {
        const span = document.createElement('span');
        span.style.color = colorize(index);
        span.innerText = ` ${victim.name.toUpperCase()} `;
        spanContainer.appendChild(span);
    })
};

fillContainer();