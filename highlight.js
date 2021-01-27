// function highlight(gamePiece){
//     if(gamePiece.color == 'blue'){
//         gamePiece.image.src = "assets/BluePiece96x96Transparent.png";
//     }
//     if(gamePiece.color == 'red'){
//         gamePiece.image.src = "assets/RedPiece96x96Transparent.png";
//     }
//     if(gamePiece.color == 'yellow'){
//         gamePiece.image.src = "assets/YellowPiece96x96Transparent.png";
//     }
//     if(gamePiece.color == 'green'){
//         gamePiece.image.src = "assets/GreenPiece96x96Transparent.png";
//     }
// }
// import { idToPiece } from './index.js'
// console.log(idToPiece)
export function highlight(idArray) {

    for (let i = 0; i < idArray.length; i++) {
        let cur = idArray[i]
        console.log(idToPiece.cur)
    }
}
