const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
console.log(canvas);
console.log(ctx);

const img = new Image();
const bluePiece1 = new Image();
const bluePiece2 = new Image();
const bluePiece3 = new Image();
const bluePiece4 = new Image();
const redPiece1 = new Image();
const redPiece2 = new Image();
const redPiece3 = new Image();
const redPiece4 = new Image();
const greenPiece1 = new Image();
const greenPiece2 = new Image();
const greenPiece3 = new Image();
const greenPiece4 = new Image();
const yellowPiece1 = new Image();
const yellowPiece2 = new Image();
const yellowPiece3 = new Image();
const yellowPiece4 = new Image();

let bluePiece1Pos = {
  x: 495,
  y: 620
}
let bluePiece2Pos = {
  x: 630,
  y: 620
}
let bluePiece3Pos = {
  x: 627,
  y: 375
}
let bluePiece4Pos = {
  x: 495,
  y: 490
}
let yellowPiece1Pos = {
  x: 160,
  y: 620
}
let yellowPiece2Pos = {
  x: 25,
  y: 620
}
let yellowPiece3Pos = {
  x: 25,
  y: 500
}
let yellowPiece4Pos = {
  x: 160,
  y: 500
}
let greenPiece1Pos = {
  x: 25,
  y: 30
}
let greenPiece2Pos = {
  x: 25,
  y: 160
}
let greenPiece3Pos = {
  x: 155,
  y: 30
}
let greenPiece4Pos = {
  x: 155,
  y: 160
}
let redPiece1Pos = {
  x: 495,
  y: 30
}
let redPiece2Pos = {
  x: 495,
  y: 160
}
let redPiece3Pos = {
  x: 630,
  y: 30
}
let redPiece4Pos = {
  x: 630,
  y: 160
}
yellowPiece4.addEventListener('load', function () {
  // execute drawImage statements here
  ctx.drawImage(img, 0, 0);
  ctx.drawImage(bluePiece1, bluePiece1Pos.x, bluePiece1Pos.y);
  ctx.drawImage(bluePiece2, bluePiece2Pos.x, bluePiece2Pos.y);
  // First move blue
  ctx.drawImage(bluePiece3, bluePiece3Pos.x, bluePiece3Pos.y);
  ctx.drawImage(bluePiece4, bluePiece4Pos.x, bluePiece4Pos.y);
  ctx.drawImage(yellowPiece1, yellowPiece1Pos.x, yellowPiece1Pos.y);
  ctx.drawImage(yellowPiece2, yellowPiece2Pos.x, yellowPiece2Pos.y);
  ctx.drawImage(yellowPiece3, yellowPiece3Pos.x, yellowPiece3Pos.y);
  ctx.drawImage(yellowPiece4, yellowPiece4Pos.x, yellowPiece4Pos.y);
  ctx.drawImage(greenPiece1, greenPiece1Pos.x, greenPiece1Pos.y);
  ctx.drawImage(greenPiece2, greenPiece2Pos.x, greenPiece2Pos.y);
  ctx.drawImage(greenPiece3, greenPiece3Pos.x, greenPiece3Pos.y);
  ctx.drawImage(greenPiece4, greenPiece4Pos.x, greenPiece4Pos.y);
  ctx.drawImage(redPiece1, redPiece1Pos.x, redPiece1Pos.y);
  ctx.drawImage(redPiece2, redPiece2Pos.x, redPiece2Pos.y);
  ctx.drawImage(redPiece3, redPiece3Pos.x, redPiece3Pos.y);
  ctx.drawImage(redPiece4, redPiece4Pos.x, redPiece4Pos.y);

}, false);
img.src = "./assets/LudoBoard.png";
bluePiece1.src = "./assets/BluePiece96x96.png";
bluePiece2.src = "./assets/BluePiece96x96.png";
bluePiece3.src = "./assets/BluePiece96x96.png";
bluePiece4.src = "./assets/BluePiece96x96.png";
redPiece1.src = "./assets/RedPiece96x96.png";
redPiece2.src = "./assets/RedPiece96x96.png";
redPiece3.src = "./assets/RedPiece96x96.png";
redPiece4.src = "./assets/RedPiece96x96.png";
greenPiece1.src = "./assets/GreenPiece96x96.png";
greenPiece2.src = "./assets/GreenPiece96x96.png";
greenPiece3.src = "./assets/GreenPiece96x96.png";
greenPiece4.src = "./assets/GreenPiece96x96.png";
yellowPiece1.src = "./assets/YellowPiece96x96.png";
yellowPiece2.src = "./assets/YellowPiece96x96.png";
yellowPiece3.src = "./assets/YellowPiece96x96.png";
yellowPiece4.src = "./assets/YellowPiece96x96.png";

function moveLeft(pos) {
  pos.x -= 50
}
function moveRight(pos) {
  pos.x += 50
}
moveLeft(bluePiece3Pos)
moveLeft(bluePiece3Pos)
moveRight(bluePiece3Pos)
