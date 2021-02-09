const allCells = document.querySelectorAll('#cell');
const topCells = document.querySelectorAll('.cell.row-top');
const resetButton = document.querySelector('.reset');
const spanSatus = document.querySelector('.staus');


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

  // horizony6tal check

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

