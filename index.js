
const allCells = document.querySelectorAll('.cell');
const topCells = document.querySelectorAll('.cell.row-top');
const resetButton = document.querySelector('.reset');
const spanSatus = document.querySelector('.staus');

document.addEventListener("DOMContentLoaded", () => {
    
			


})

/* global Board */
/* global Player */



// columns
const column0 = [allCells[35], allCells[28], allCells[21], allCells[14], allCells[7], allCells[0], topCells[0]];
const column1 = [allCells[36], allCells[29], allCells[22], allCells[15], allCells[8], allCells[1], topCells[1]];
const column2 = [allCells[37], allCells[30], allCells[23], allCells[16], allCells[9], allCells[2], topCells[2]];
const column3 = [allCells[38], allCells[31], allCells[24], allCells[17], allCells[10], allCells[3], topCells[3]];
const column4 = [allCells[39], allCells[32], allCells[25], allCells[18], allCells[11], allCells[4], topCells[4]];
const column5 = [allCells[40], allCells[33], allCells[26], allCells[19], allCells[12], allCells[5], topCells[5]];
const column6 = [allCells[41], allCells[34], allCells[27], allCells[20], allCells[13], allCells[6], topCells[6]];
const columns = [column0, column1, column2, column3, column4, column5, column6];


// rows
const topRow = [topCells[0], topCells[1], topCells[2], topCells[3], topCells[4], topCells[5], topCells[6]];
const row0 = [allCells[0], allCells[1], allCells[2], allCells[3], allCells[4], allCells[5], allCells[6]];
const row1 = [allCells[7], allCells[8], allCells[9], allCells[10], allCells[11], allCells[12], allCells[13]];
const row2 = [allCells[14], allCells[15], allCells[16], allCells[17], allCells[18], allCells[19], allCells[20]];
const row3 = [allCells[21], allCells[22], allCells[23], allCells[24], allCells[25], allCells[26], allCells[27]];
const row4 = [allCells[28], allCells[29], allCells[30], allCells[31], allCells[32], allCells[33], allCells[34]];
const row5 = [allCells[35], allCells[36], allCells[37], allCells[38], allCells[39], allCells[40], allCells[41]];
const rows = [row0, row1, row2, row3, row4, row5, topRow];

let gameIsActive = true;
let redIsNext = true;

function getArrayList (cell){
  const classList = cell.classList;
  return [...classList];

  
}

function cellLocation (cell){
  const classList = getArrayList(cell);

  const rowClass = classList.find(className => className.includes('rows'));
  const columnsClass = classList.find(className => className.includes('col'));
  const colIndex = columnsClass;
  const rowIndex = rowClass;
  const rowNumbers = parseInt(rowIndex, 10)
  const colNumbers = parseInt(columnsClass, 10)

  return [rowNumbers, colNumbers];
}

function isOpenCell (colIndex){
  const column = column[colIndex];
  const columnWithoutTop = columns.slice(0, 6);
  
  for(const cell of columnWithoutTop){
    const classList = getArrayList(cell);
    if(!classList.includes('yellow') && !classList.includes('red')){
      return cell;
    }
  }
  return null;

}

function colorCell (cell){
  const classList = getArrayList(cell);
  if(classList.includes('yellow')){
    return 'yellow';
  }
  if(classList.includes('red')){
    return 'red';
  }
  return null;
}

// function checkWin (cells){
//   if(cells.length < 4){
//     return false;
//   } 
//   gameIsActive = false;

//   for(const cell of cells){
//     cell.classList.add('win');
//   }
//   spanSatus.innerText =   ``
// }

const checkGameStatus = function (cell){
  const color = colorCell(cell);
  const [rowIndex, colIndex] = cellLocation(cell);

  // horizantal check
//     function checkWinnerVertical(board, color) {
//   // count variable to hold number of consecutive colors
//   var count = 0
//   // Since i goes up by one for each row vertically, we create a loop the length of the board.
//   // We create 6 if statements to check from 0-5, to see if the color matches functions 'color'
//   // input.

//   for (let i=0; i < board.length; i++) {
//     // if color matches we increment count by 1
//     if (board[0][i] == color) {
//       count += 1
//       // if color does not match at any point, we set count back to '0'
//     } else {count = 0}
//     if (board[1][i] == color) {
//       count += 1
//     } else {count = 0}
//     if (board[2][i] == color) {
//       count += 1
//     } else {count = 0}
//     if (board[3][i] == color) {
//       count += 1
//       // We start checking if count reached 4 without being reset at the fourth check,
//       // Because prior to this, it is not possible for count to reach 4.
//       // If we have 4 of the same colors so far, we return true.
//       if (count ==4) {return true}
//     } else {count = 0}
//     if (board[4][i] == color) {
//       count += 1
//       if (count ==4) {return true}
//     } else {count = 0}
//     if (board[5][i] == color) {
//       count += 1
//     if (count ==4) {return true}
//     } else {count = 0}
//   }
//   // If we went through every row and never reached count of 4 matching colors, we return false.
//   return false;
// }
// console.log(checkWinVer(board, 'x'))

// var horizontalRow = [1,0,1,1,0,1]


// function checkWiinnerHorizontal(horizontalRow, color) {
//   // We have a flag that is fale to start off with, we use to control whether we increment count
//   // or set count back to 0.
//   let flag = false
//   let count = 0
//   // Loop the length of the horizontal row
//   for(let i=0; i <horizontalRow.length; i++) {
//     // if element in row matches function 'color' input we change the flag to true
//     if (horizontalRow[i] == color) {
//       flag = true
//       // if the color doesn't match function input, we set flag to false, and reset counter to '0'
//     } else if(horizontalRow[i] != color) {
//       flag = false
//       count = 0
//     }
//     // incrementing as long as flag remains true
//     if (flag == true) {
//       count += 1
//     } 
//     // if we reach count of 4, we return true for winner.
//     if (count == 4) {
//       return true
//     }
//   }
//   // if loop ends and count never reached 4, we return false for no win.
//   return false
// }

}



// events 






























// /* global Board */
// /* global Player */


// let board = new Board();

// let playerOne = new Player("Player 1", "red");
// let playerTwo = new Player("Player 2", "black");


// document.addEventListener("DOMContentLoaded", () => {
    
//     let cell = document.getElementsByClassName("cell");
//     // const rows = 6;
//     // const cols = 7;
//     document.querySelectorAll("div.top").forEach(cell => {
//       const rows = 6;
//       const cols = 7;
//         cell.addEventListener("click", function(e) {
//         cell.setAttribute("style", "background-color: red");
//         let top = document.querySelector("div.top")
//         for (let row = rows-1; row >= 0; row--) {
//           for(let col = col-1; col >= 0; col--){
//             if (board[row][col] === 0) {
//               board[row][col] = this.playerOne;
//               break;
//             }
//           }
//         }
//         // if(top){

//         // }
//         // let squares =document.querySelectorAll(".board div")
//         // if( squares[click+7].classList.contains("taken") && !squares[click].classList.contains("taken")){ 
//         //   if(currentPlayer===1){ 
//         //   currentPlayer=2 
//         //   player.innerHTML=currentPlayer
//         //   this.className="player-one taken"

//     });
//   });


// });


