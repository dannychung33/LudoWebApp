const canvas = document.querySelector('canvas');
console.log(canvas.childNodes)
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = innerHeight;

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

//possible movements for the coins
PossibleMovements = {
  1: 'right',
  2: 'right',
  3: 'right',
  4: 'right',
  5: 'up-right',
  6: 'up',
  7: 'up',
  8: 'up',
  9: 'up',
  10: 'up',
  11: 'right',
  12: 'right',
  13: 'down',
  14: 'down',
  15: 'down',
  16: 'down',
  17: 'down',
  18: 'down-right',
  19: 'right',
  20: 'right',
  21: 'right',
  22: 'right',
  23: 'right',
  24: 'down',
  25: 'down',
  26: 'left',
  27: 'left',
  28: 'left',
  29: 'left',
  30: 'left',
  31: 'down-left',
  32: 'down',
  33: 'down',
  34: 'down',
  35: 'down',
  36: 'down',
  37: 'left',
  38: 'left',
  39: 'up',
  40: 'up',
  41: 'up',
  42: 'up',
  43: 'up',
  44: 'up-left',
  45: 'left',
  46: 'left',
  47: 'left',
  48: 'left',
  49: 'up',
  50: 'up',
  51: 'right'
}

yellowPiece4.image.addEventListener('load', function () {
  // execute drawImage statements here
  ctx.drawImage(gameBoard, 0, 0);

  ctx.drawImage(bluePiece1.image, bluePiece1.x, bluePiece1.y);
  ctx.drawImage(bluePiece2.image, bluePiece2.x, bluePiece2.y);
  // First move blue
  ctx.drawImage(bluePiece3.image, bluePiece3.x, bluePiece3.y);
  ctx.drawImage(bluePiece4.image, bluePiece4.x, bluePiece4.y);
  ctx.drawImage(yellowPiece1.image, yellowPiece1.x, yellowPiece1.y);
  ctx.drawImage(yellowPiece2.image, yellowPiece2.x, yellowPiece2.y);
  ctx.drawImage(yellowPiece3.image, yellowPiece3.x, yellowPiece3.y);
  ctx.drawImage(yellowPiece4.image, yellowPiece4.x, yellowPiece4.y);
  ctx.drawImage(greenPiece1.image, greenPiece1.x, greenPiece1.y);
  ctx.drawImage(greenPiece2.image, greenPiece2.x, greenPiece2.y);
  ctx.drawImage(greenPiece3.image, greenPiece3.x, greenPiece3.y);
  ctx.drawImage(greenPiece4.image, greenPiece4.x, greenPiece4.y);
  ctx.drawImage(redPiece1.image, redPiece1.x, redPiece1.y);
  ctx.drawImage(redPiece2.image, redPiece2.x, redPiece2.y);
  ctx.drawImage(redPiece3.image, redPiece3.x, redPiece3.y);
  ctx.drawImage(redPiece4.image, redPiece4.x, redPiece4.y);

}, false);

gameBoard.src = "./assets/LudoBoard750x750.png";
bluePiece1.image.src = "./assets/BluePiece96x96.png";
bluePiece2.image.src = "./assets/BluePiece96x96.png";
bluePiece3.image.src = "./assets/BluePiece96x96.png";
bluePiece4.image.src = "./assets/BluePiece96x96.png";
redPiece1.image.src = "./assets/RedPiece96x96.png";
redPiece2.image.src = "./assets/RedPiece96x96.png";
redPiece3.image.src = "./assets/RedPiece96x96.png";
redPiece4.image.src = "./assets/RedPiece96x96.png";
greenPiece1.image.src = "./assets/GreenPiece96x96.png";
greenPiece2.image.src = "./assets/GreenPiece96x96.png";
greenPiece3.image.src = "./assets/GreenPiece96x96.png";
greenPiece4.image.src = "./assets/GreenPiece96x96.png";
yellowPiece1.image.rc = "./assets/YellowPiece96x96.png";
yellowPiece2.image.src = "./assets/YellowPiece96x96.png";
yellowPiece3.image.src = "./assets/YellowPiece96x96.png";
yellowPiece4.image.src = "./assets/YellowPiece96x96.png";
bufferLoad.image.src = "./assets/YellowPiece96x96.png";


function renderPieces() {
  ctx.drawImage(bluePiece1.image, bluePiece1.x, bluePiece1.y);
  ctx.drawImage(bluePiece2.image, bluePiece2.x, bluePiece2.y);
  // First move blue
  //ctx.drawImage(bluePiece3.image, bluePiece3.x, bluePiece3.y);
  ctx.drawImage(bluePiece4.image, bluePiece4.x, bluePiece4.y);
  ctx.drawImage(yellowPiece1.image, yellowPiece1.x, yellowPiece1.y);
  ctx.drawImage(yellowPiece2.image, yellowPiece2.x, yellowPiece2.y);
  ctx.drawImage(yellowPiece3.image, yellowPiece3.x, yellowPiece3.y);
  ctx.drawImage(yellowPiece4.image, yellowPiece4.x, yellowPiece4.y);
  ctx.drawImage(greenPiece1.image, greenPiece1.x, greenPiece1.y);
  ctx.drawImage(greenPiece2.image, greenPiece2.x, greenPiece2.y);
  ctx.drawImage(greenPiece3.image, greenPiece3.x, greenPiece3.y);
  ctx.drawImage(greenPiece4.image, greenPiece4.x, greenPiece4.y);
  ctx.drawImage(redPiece1.image, redPiece1.x, redPiece1.y);
  ctx.drawImage(redPiece2.image, redPiece2.x, redPiece2.y);
  ctx.drawImage(redPiece3.image, redPiece3.x, redPiece3.y);
  ctx.drawImage(redPiece4.image, redPiece4.x, redPiece4.y);

}
const x = bluePiece3.x;
const y = bluePiece3.y;

function leftSlideMove(piece, pieceX, pieceY) {
  let startTime = Date.now();
  let slideInterval = setInterval(function animate() {
    return function () {
      //requestAnimationFrame(animate);
      ctx.clearRect(pieceX, pieceY, 96, 96);

      ctx.drawImage(gameBoard, 0, 0);
      renderPieces();
      ctx.drawImage(piece, pieceX, pieceY);
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

      ctx.drawImage(img, 0, 0);
      renderPieces();
      ctx.drawImage(piece, pieceX, pieceY);
      pieceX += 1;
      if ((Date.now() - startTime) > 507) {
        piece.x = pieceX;
        clearInterval(slideInterval);
      }
    };

  }(), 10)
};

let delay = 0;
canvas.addEventListener('click', function () {
  console.log("click worked")
  var x = bluePiece3.x, y = bluePiece3.y;

  leftSlideMove(bluePiece3.image, x, y);

}, false);

//window.addEventListener("onload", leftSlideMove(bluePiece3Pos.x, bluePiece3Pos.y))






