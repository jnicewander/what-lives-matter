import {victims} from './formattedData.js';

window.addEventListener('resize', randomFill);
const spanContainer = document.getElementById('span-container');
const victimNames = victims.map(({name, died}) => ({name, died}));
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

function colorize(num) {
    let lightness = 100;
    lightness -= num;
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
    let counter = 0;
    let prevHeight = 0;
    let childHeight = 0;
    while (childHeight <= vh + ((vh * 25) / 100)) {
        let victim = randomName();
        if (victim) {
            const span = document.createElement('span');
            span.innerText = `  ${victim.name.toUpperCase()}  `;
            spanContainer.appendChild(span);
            prevHeight = childHeight;
            childHeight = ulSize.height();
            if (childHeight !== prevHeight) {
                counter++;
                span.style.color = colorize(counter);
            } else {
                span.style.color = colorize(counter);
            }
        }
    }
}

randomFill();

// set color
// add spans width up
// check if total is wider than VW + Margins
// if yes ->
//      clear span width tracker
//      increase color lightness val
// if no -> 
//      loop again