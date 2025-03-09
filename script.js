'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor);
document.getElementById('color-button').addEventListener('mouseover', changeMousePointer);

function changeColor() {
  // console.log('Button clicked!'); // feel free to change/delete this line
  document.body.style.background = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function changeMousePointer() {
  document.getElementById('color-button').style.cursor = `pointer`;
}