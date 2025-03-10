'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor);
document.getElementById('color-button').addEventListener('mouseover', changeMousePointer);
document.body.addEventListener('click', kusama);

function changeColor() {
  document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  document.getElementById('color-button').style.zIndex = "100";
};

function changeMousePointer() {
  document.getElementById('color-button').style.cursor = `pointer`;
};

let counter = 0;

function kusama(event) {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id",`circle${counter}`);
  document.body.appendChild(newDiv);
  const circleSize = Math.random() * 300;
  document.getElementById(`circle${counter}`).style.position = "absolute";
  document.getElementById(`circle${counter}`).style.top = `${event.clientY - (circleSize / 2)}px`;
  document.getElementById(`circle${counter}`).style.left = `${event.clientX - (circleSize / 2)}px`;
  document.getElementById(`circle${counter}`).style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  document.getElementById(`circle${counter}`).style.width = `${circleSize}px`;
  document.getElementById(`circle${counter}`).style.height = `${circleSize}px`;
  document.getElementById(`circle${counter}`).style.borderRadius = "50%";
  document.getElementById(`circle${counter}`).style.zIndex = "10";
  counter += 1; 
};
