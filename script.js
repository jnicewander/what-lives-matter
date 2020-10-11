import {victims} from './formattedData.js';

window.addEventListener('resize', randomFill);
const spanContainer = document.getElementById('span-container');
const victimNames = victims.map(({name, died}) => ({name, died}));
let tracker = new Set();
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerHeight || 0);
const ulSize = {
    height: function() {
        return spanContainer.offsetHeight;
    },
    width: function() {
        return spanContainer.offsetWidth;
    }
}

function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function colorize(date) {
    let lightness = date.includes('2020') ? 50 : 100;
    let color = `hsl(4, 100%, ${lightness}%)`;
    return color;
}

function randomName() { 
    let index = null;
    index = Math.floor(Math.random() * victimNames.length);
    return victimNames[index];
}

function randomFill() {
    removeAllChildren(spanContainer);
    let childHeight = 0;
    while (childHeight <= vh + ((vh * 25) / 100)) {
        let victim = randomName();
        if (victim) {
            const span = document.createElement('span');
            span.style.color = colorize(victim.died);
            span.innerText = ` ${victim.name} `;
            spanContainer.appendChild(span);
            childHeight = ulSize.height();
        }
    }
}

randomFill();