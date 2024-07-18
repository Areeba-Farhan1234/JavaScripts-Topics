//Event Bubbling and Capturing

// JavaScript file

const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// Event handler function
function eventHandler(event) {
  console.log(`Event triggered on: ${this.id}`);
  console.log(`Event type: ${event.type}`);
  console.log(`Event phase: ${event.eventPhase}`);
}

grandparent.addEventListener('click', eventHandler);
parent.addEventListener('click', eventHandler);
child.addEventListener('click', eventHandler);


grandparent.addEventListener('click', eventHandler, true);
parent.addEventListener('click', eventHandler, true);
child.addEventListener('click', eventHandler, true);
