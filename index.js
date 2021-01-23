const canvas = document.querySelector('canvas');
const ctx  = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
console.log(canvas);
console.log(ctx);

const img = new Image();
const bluePiece = new Image();
const redPiece = new Image();
const greenPiece = new Image();
const yellowPiece = new Image();

yellowPiece.addEventListener('load', function() {
    // execute drawImage statements here
    ctx.drawImage(img, 0,0);
    ctx.drawImage(bluePiece, 495, 620);
    ctx.drawImage(bluePiece, 630, 620);
    ctx.drawImage(bluePiece, 630, 490);
    ctx.drawImage(bluePiece, 495, 490);
    ctx.drawImage(yellowPiece, 160, 620);
    ctx.drawImage(yellowPiece, 25, 620);
    ctx.drawImage(yellowPiece, 25, 500);
    ctx.drawImage(yellowPiece, 160, 500);
    ctx.drawImage(greenPiece, 25, 30);
    ctx.drawImage(greenPiece, 25, 160);
    ctx.drawImage(greenPiece, 155, 30);
    ctx.drawImage(greenPiece, 155, 160);
    ctx.drawImage(redPiece, 495, 30);
    ctx.drawImage(redPiece, 495, 160);
    ctx.drawImage(redPiece, 630, 30);
    ctx.drawImage(redPiece, 630, 160);

  }, false);
img.src = "./assets/LudoBoard.png";
bluePiece.src = "./assets/BluePiece96x96.png";
redPiece.src = "./assets/RedPiece96x96.png";
greenPiece.src = "./assets/GreenPiece96x96.png";
yellowPiece.src = "./assets/YellowPiece96x96.png";

