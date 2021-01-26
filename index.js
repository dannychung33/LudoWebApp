const canvas = document.querySelector('canvas');
console.log(canvas.childNodes)
const ctx = canvas.getContext('2d');
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
  x: 495,
  y: 620
}
let bluePiece2 = {
  image: new Image(),
  x: 630,
  y: 620
}
let bluePiece3 = {
  image: new Image(),
  x: 677,
  y: 375
}
let bluePiece4 = {
  image: new Image(),
  x: 495,
  y: 490
}
let greenPiece1 = {
  image: new Image(),
  x: 25,
  y: 30
}
let greenPiece2 = {
  image: new Image(),
  x: 25,
  y: 160
}
let greenPiece3 = {
  image: new Image(),
  x: 155,
  y: 30
}
let greenPiece4 = {
  image: new Image(),
  x: 155,
  y: 160
}
let redPiece1 = {
  image: new Image(),
  x: 495,
  y: 30
}
let redPiece2 = {
  image: new Image(),
  x: 495,
  y: 160
}
let redPiece3 = {
  image: new Image(),
  x: 630,
  y: 30
}
let redPiece4 = {
  image: new Image(),
  x: 630,
  y: 160
}
let yellowPiece1 = {
  image: new Image(),
  x: 159,
  y: 621
}
let yellowPiece2 = {
  image: new Image(),
  x: 24,
  y: 621
}
let yellowPiece3 = {
  image: new Image(),
  x: 24,
  y: 490
}
let yellowPiece4 = {
  image: new Image(),
  x: 159,
  y: 490
}


preloadFloorplan = function(){
yellowPiece1.image.onload = function () {
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

function leftSlideMove(piece, pieceX, pieceY) {
  let startTime = Date.now();
  let slideInterval = setInterval(function animate() {
    return function () {
      //requestAnimationFrame(animate);
      ctx.clearRect(pieceX, pieceY, 96, 96);

      ctx.drawImage(gameBoard, 0, 0);
      renderPieces();
      ctx.drawImage(piece.image, pieceX, pieceY);
      pieceX -= 1;
      // stop condition
      if ((Date.now() - startTime) > 500) {
        bluePiece3.x = pieceX;
        clearInterval(slideInterval);
      }
    };

  }(), 10)
};

function rightSlideMove(piece, pieceX, pieceY) {
  let startTime = Date.now();
  let slideInterval = setInterval(function animate() {
    return function () {
      //requestAnimationFrame(animate);
      ctx.clearRect(pieceX, pieceY, 96, 96);

      ctx.drawImage(gameBoard, 0, 0);
      renderPieces();
      ctx.drawImage(piece.image, pieceX, pieceY);
      pieceX += 1;
      // stop condition
      if ((Date.now() - startTime) > 500) {
        bluePiece3.x = pieceX;
        clearInterval(slideInterval);
      }
    };

  }(), 10)
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


  
