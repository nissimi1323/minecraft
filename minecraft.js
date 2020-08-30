'use strict'

/**map ************/
/**lava - (7), sky - (0), dirt - (1), grass - (2), rock -(3), tree log - (4), tree leaf - (5)  cloud - (6) */
/************** */
let matrixEl = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0],
  [0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 6, 6, 6, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 3, 0, 0, 0, 0, 4, 0, 0, 0, 0, 3, 0],
  [0, 2, 1, 0, 3, 0, 0, 0, 0, 4, 0, 0, 0, 0, 3, 0],
  [2, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
];

/**image first build */
// function imgCreation(name) {
//   `${name}`.src = `./img/${name}.png`;
//   `${name}`.width = '50';
//   `${name}`.height = '50';
//   let div = "<div><img src=''></img></div>"
//   return div;
// }

/**build the board */
function boardCreation(name) {
  // let createDiv = `<div class="tile ${name}" style="background-image: url('./img/${name}.png')"></div>\ `;
  let createDiv = `<div class="tile ${name}" style="background-image: url('./img/${name}.png')"></div>`;
  return createDiv;
}

const asset = ['empty', 'dirt', 'grass', 'rock', 'treelog', 'leaf', 'cloud', 'lava'];

let html = '';
for (let row = 0; row < matrixEl.length; row++) {
  for (let cols = 0; cols < matrixEl[row].length; cols++) {
    html += boardCreation(asset[matrixEl[row][cols]]);
  }
}

let el = document.querySelector(".container");

/**convert str to html element */
const convStrHtml = document.createRange().createContextualFragment(html);
el.appendChild(convStrHtml);

// let newDiv = document.createElement("div");
// el.innerHTML = html;



