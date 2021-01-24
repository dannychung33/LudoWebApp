const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
console.log(canvas);
console.log(ctx);
console.log('jenna')
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

yellowPiece4.addEventListener('load', function () {
  // execute drawImage statements here
  ctx.drawImage(img, 0, 0);
  ctx.drawImage(bluePiece1, 495, 620);
  ctx.drawImage(bluePiece2, 630, 620);
  // First move blue
  ctx.drawImage(bluePiece3, 627, 375);
  ctx.drawImage(bluePiece4, 495, 490);
  ctx.drawImage(yellowPiece1, 160, 620);
  ctx.drawImage(yellowPiece2, 25, 620);
  ctx.drawImage(yellowPiece3, 25, 500);
  ctx.drawImage(yellowPiece4, 160, 500);
  ctx.drawImage(greenPiece1, 25, 30);
  ctx.drawImage(greenPiece2, 25, 160);
  ctx.drawImage(greenPiece3, 155, 30);
  ctx.drawImage(greenPiece4, 155, 160);
  ctx.drawImage(redPiece1, 495, 30);
  ctx.drawImage(redPiece2, 495, 160);
  ctx.drawImage(redPiece3, 630, 30);
  ctx.drawImage(redPiece4, 630, 160);

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
