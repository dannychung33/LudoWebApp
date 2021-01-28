const canvas = document.querySelector('canvas');
import highlight from './highlight';
import { drawLeftLine } from './pathDrawer.js';
console.log(canvas.childNodes)
export const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = innerHeight;
"use strict";
var button
var payload

function togglePayload() {
  payload.classList.toggle('hidden');
}
function init() {
  button = document.querySelector('.button')
  payload = document.querySelector('.payload')
  button.onclick = togglePayload;
}
document.addEventListener("DOMContentLoaded", init, false);
//alert("Click on canvas for left, click on dice for right, up and down keys for up and down")
console.log(canvas);
console.log(ctx);

const gameBoard = new Image();

let bluePiece1 = {
  image: new Image(),
  id: 'b1',
  color: 'blue',
  x: 495,
  y: 620
}
let bluePiece2 = {
  image: new Image(),
  id: 'b2',
  color: 'blue',
  x: 630,
  y: 620
}
let bluePiece3 = {
  image: new Image(),
  id: 'b3',
  color: 'blue',
  x: 678,
  y: 375
}
let bluePiece4 = {
  image: new Image(),
  id: 'b4',
  color: 'blue',
  x: 495,
  y: 490
}
let greenPiece1 = {
  image: new Image(),
  id: 'g1',
  color: 'green',
  x: 25,
  y: 30
}
let greenPiece2 = {
  image: new Image(),
  id: 'g2',
  color: 'green',
  x: 25,
  y: 160
}
let greenPiece3 = {
  image: new Image(),
  id: 'g3',
  color: 'green',
  x: 155,
  y: 30
}
let greenPiece4 = {
  image: new Image(),
  id: 'g4',
  color: 'green',
  x: 155,
  y: 160
}
let redPiece1 = {
  image: new Image(),
  id: 'r1',
  color: 'red',
  x: 495,
  y: 30
}
let redPiece2 = {
  image: new Image(),
  id: 'r2',
  color: 'red',
  x: 495,
  y: 160
}
let redPiece3 = {
  image: new Image(),
  id: 'r3',
  color: 'red',
  x: 630,
  y: 30
}
let redPiece4 = {
  image: new Image(),
  id: 'r4',
  color: 'red',
  x: 630,
  y: 160
}
let yellowPiece1 = {
  image: new Image(),
  id: 'y1',
  color: 'yellow',
  x: 159,
  y: 621
}
let yellowPiece2 = {
  image: new Image(),
  id: 'y2',
  color: 'yellow',
  x: 24,
  y: 621
}
let yellowPiece3 = {
  image: new Image(),
  id: 'y3',
  color: 'yellow',
  x: 24,
  y: 490
}
let yellowPiece4 = {
  image: new Image(),
  id: 'y4',
  color: 'yellow',
  x: 159,
  y: 490
}

function preloadFloorplan() {
  yellowPiece4.image.onload = function () {
    // execute drawImage statements here
    ctx.drawImage(gameBoard, 0, 0);

    ctx.drawImage(bluePiece1.image, bluePiece1.x, bluePiece1.y);
    ctx.drawImage(bluePiece2.image, bluePiece2.x, bluePiece2.y);
    // First move blue
    ctx.drawImage(bluePiece3.image, bluePiece3.x, bluePiece3.y);
    ctx.drawImage(bluePiece4.image, bluePiece4.x, bluePiece4.y);
    ctx.drawImage(greenPiece1.image, greenPiece1.x, greenPiece1.y);
    ctx.drawImage(greenPiece2.image, greenPiece2.x, greenPiece2.y);
    ctx.drawImage(greenPiece3.image, greenPiece3.x, greenPiece3.y);
    ctx.drawImage(greenPiece4.image, greenPiece4.x, greenPiece4.y);
    ctx.drawImage(redPiece1.image, redPiece1.x, redPiece1.y);
    ctx.drawImage(redPiece2.image, redPiece2.x, redPiece2.y);
    ctx.drawImage(redPiece3.image, redPiece3.x, redPiece3.y);
    ctx.drawImage(redPiece4.image, redPiece4.x, redPiece4.y);
    ctx.drawImage(yellowPiece1.image, yellowPiece1.x, yellowPiece1.y);
    ctx.drawImage(yellowPiece2.image, yellowPiece2.x, yellowPiece2.y);
    ctx.drawImage(yellowPiece3.image, yellowPiece3.x, yellowPiece3.y);
    ctx.drawImage(yellowPiece4.image, yellowPiece4.x, yellowPiece4.y);

  }
}
preloadFloorplan()
gameBoard.src = "./assets/LudoBoard750x750.png";
bluePiece1.image.src = "./assets/BluePiece96x96.png";
bluePiece2.image.src = "./assets/BluePiece96x96.png";
bluePiece3.image.src = "./assets/BluePiece96x96.png";
bluePiece4.image.src = "./assets/BluePiece96x96.png";

greenPiece1.image.src = "./assets/GreenPiece96x96.png";
greenPiece2.image.src = "./assets/GreenPiece96x96.png";
greenPiece3.image.src = "./assets/GreenPiece96x96.png";
greenPiece4.image.src = "./assets/GreenPiece96x96.png";

redPiece1.image.src = "./assets/RedPiece96x96.png";
redPiece2.image.src = "./assets/RedPiece96x96.png";
redPiece3.image.src = "./assets/RedPiece96x96.png";
redPiece4.image.src = "./assets/RedPiece96x96.png";

yellowPiece1.image.src = "./assets/YellowPiece96x96.png";
yellowPiece2.image.src = "./assets/YellowPiece96x96.png";
yellowPiece3.image.src = "./assets/YellowPiece96x96.png";
yellowPiece4.image.src = "./assets/YellowPiece96x96.png";


function renderPieces() {
  ctx.drawImage(bluePiece1.image, bluePiece1.x, bluePiece1.y);
  ctx.drawImage(bluePiece2.image, bluePiece2.x, bluePiece2.y);
  // First move blue
  //ctx.drawImage(bluePiece3.image, bluePiece3.x, bluePiece3.y);
  ctx.drawImage(bluePiece4.image, bluePiece4.x, bluePiece4.y);
  ctx.drawImage(greenPiece1.image, greenPiece1.x, greenPiece1.y);
  ctx.drawImage(greenPiece2.image, greenPiece2.x, greenPiece2.y);
  ctx.drawImage(greenPiece3.image, greenPiece3.x, greenPiece3.y);
  ctx.drawImage(greenPiece4.image, greenPiece4.x, greenPiece4.y);
  ctx.drawImage(redPiece1.image, redPiece1.x, redPiece1.y);
  ctx.drawImage(redPiece2.image, redPiece2.x, redPiece2.y);
  ctx.drawImage(redPiece3.image, redPiece3.x, redPiece3.y);
  ctx.drawImage(redPiece4.image, redPiece4.x, redPiece4.y);
  ctx.drawImage(yellowPiece1.image, yellowPiece1.x, yellowPiece1.y);
  ctx.drawImage(yellowPiece2.image, yellowPiece2.x, yellowPiece2.y);
  ctx.drawImage(yellowPiece3.image, yellowPiece3.x, yellowPiece3.y);
  ctx.drawImage(yellowPiece4.image, yellowPiece4.x, yellowPiece4.y);

}

drawLeftLine(750, 425, 400, 425);

function leftSlideMove(piece, pieceX, pieceY) {
  let startTime = new Date().getTime();
  let slideInterval = setInterval(function animate() {
    return function () {
      //requestAnimationFrame(animate);
      ctx.clearRect(pieceX, pieceY, 96, 96);

      ctx.drawImage(gameBoard, 0, 0);
      renderPieces();
      ctx.drawImage(piece.image, pieceX, pieceY);
      pieceX -= 0.4;
      // stop condition
      if ((new Date().getTime() - startTime) > 490) {
        bluePiece3.x = pieceX;
        clearInterval(slideInterval);
      }
    };

  }(), 0)
};

function rightSlideMove(piece, pieceX, pieceY) {
  let startTime = new Date().getTime();
  let slideInterval = setInterval(function animate() {
    return function () {
      //requestAnimationFrame(animate);
      ctx.clearRect(pieceX, pieceY, 96, 96);

      ctx.drawImage(gameBoard, 0, 0);
      renderPieces();
      ctx.drawImage(piece.image, pieceX, pieceY);
      pieceX += 0.4;
      // stop condition
      if ((new Date().getTime() - startTime) > 490) {
        bluePiece3.x = pieceX;
        clearInterval(slideInterval);
      }
    };

  }(), 0)
};


function upSlideMove(piece, pieceX, pieceY) {
  let startTime = Date.now();
  let slideInterval = setInterval(function animate() {
    return function () {
      //requestAnimationFrame(animate);
      ctx.clearRect(pieceX, pieceY, 96, 96);

      ctx.drawImage(gameBoard, 0, 0);
      renderPieces();
      ctx.drawImage(piece.image, pieceX, pieceY);
      pieceY -= 1;
      // stop condition
      if ((Date.now() - startTime) > 500) {
        bluePiece3.y = pieceY;
        clearInterval(slideInterval);
      }
    };

  }(), 10)
};

function downSlideMove(piece, pieceX, pieceY) {
  let startTime = Date.now();
  let slideInterval = setInterval(function animate() {
    return function () {
      //requestAnimationFrame(animate);
      ctx.clearRect(pieceX, pieceY, 96, 96);

      ctx.drawImage(gameBoard, 0, 0);
      renderPieces();
      ctx.drawImage(piece.image, pieceX, pieceY);
      pieceY += 1;
      // stop condition
      if ((Date.now() - startTime) > 500) {
        bluePiece3.y = pieceY;
        clearInterval(slideInterval);
      }
    };

  }(), 10)
};

let delay = 0;
canvas.addEventListener('click', function () {
  console.log("click worked")
  var x = bluePiece3.x, y = bluePiece3.y;

  leftSlideMove(bluePiece3, x, y);

}, false);


document.onkeyup = function (e) {
  switch (e.keyCode) {
    case 37:
      leftSlideMove(bluePiece3, bluePiece3.x, bluePiece3.y);
      break;
    case 38:
      upSlideMove(bluePiece3, bluePiece3.x, bluePiece3.y);
      break;
    case 39:
      rightSlideMove(bluePiece3, bluePiece3.x, bluePiece3.y);
      break;
    case 40:
      downSlideMove(bluePiece3, bluePiece3.x, bluePiece3.y);
      break;
  }
};

export const idToPiece = {
  b1: bluePiece1, b2: bluePiece2, b3: bluePiece3,
  b4: bluePiece4, r1: redPiece1, r3: redPiece3, r4: redPiece4, r2: redPiece2, y1: yellowPiece1, y2: yellowPiece2, y3: yellowPiece3, y4: yellowPiece4, g1: greenPiece1, g4: greenPiece4, g3: greenPiece3, g2: greenPiece2
}

export function highlight(idArray) {
  // console.log(idArray) [b1,g1]
  let map = {
    'g': "assets/GreenPiece96x96Transparent.png",
    'y': "assets/YellowPiece96x96Transparent.png",
    'b': "assets/BluePiece96x96Transparent.png",
    'r': "assets/RedPiece96x96Transparent.png"
  }
  const itemList = []
  for (let i = 0; i < idArray.length; i++) {
    let cur = idArray[i] //b1
    let item = idToPiece[cur] //idToPiece[b1] => bluePiece1
    itemList.push(item)
    item.image.src = map[cur[0]]
    ctx.drawImage(gameBoard, 0, 0);
    renderPieces();
  }

  const capture = function (e, move) {
    let x = e.clientX
    let y = e.clientY
    let offsetX = -233
    let offsetY = -130
    console.log('coord', x + offsetX, y + offsetY)
    for (let i = 0; i < itemList.length; i++) {
      console.log('item', itemList[i])

      if (itemList[i].x - 20 <= x + offsetX && itemList[i].x + 20 >= x + offsetX && itemList[i].y - 20 <= y + offsetY && itemList[i].y + 20 >= y + offsetY) {
        console.log('itemList[i]', itemList[i])
        move(itemList[i], move)
        removehighlight(idArray)
      }
    }
  }
  window.addEventListener('click', capture)
}

console.log(highlight(['b4', 'g1']))
export function removehighlight(idArray) {
  console.log(idArray)
  let map = {
    'g': "assets/GreenPiece96x96.png",
    'y': "assets/YellowPiece96x96.png",
    'b': "assets/BluePiece96x96.png",
    'r': "assets/RedPiece96x96.png"
  }
  for (let i = 0; i < idArray.length; i++) {
    let cur = idArray[i]
    let item = idToPiece[cur]
    item.image.src = map[cur[0]]
    console.log(item.image.src)
    ctx.drawImage(gameBoard, 0, 0);
    renderPieces();
  }
}
