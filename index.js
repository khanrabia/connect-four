document.addEventListener("DOMContentLoaded", () => {
  
  //player form input
  
  //first player
  let url = new URL(document.URL);
  let playerOne = url.searchParams.get('player-one');
  
  // second player
  let playerTwo = url.searchParams.get('player-two'); 
  
  // js for greeting

  //selects the elememnts from the html
  let headline = document.querySelector("#headline");
  let greetingOne = document.querySelector("#greetingOne");
  let greetingTwo = document.querySelector("#greetingTwo");
  
  //changes the innerhtml and customize it according to the name and then greets or messegaes the user
  headline.innerHTML += `Greetings ${playerOne} and ${playerTwo}`;
  greetingOne.innerHTML += `${playerOne} is red ${playerOne} plays first!`;
  greetingTwo.innerHTML += `${playerTwo} is yellow ${playerTwo} plays next!`;
  
  // changes the color of the font
  let colorOne = greetingOne.innerHTML.replace("red", "red".fontcolor("red"));
  let colorTwo = greetingTwo.innerHTML.replace("yellow", "yellow".fontcolor("yellow"));
  
  //greets call
  greetingOne.innerHTML = colorOne;
  greetingTwo.innerHTML = colorTwo;
  
  //selecting the elemnts of the html and storing it in variables to use later
  const allCells = document.querySelectorAll('.cell:not(.row-top)');
  const topCells = document.querySelectorAll('.cell.row-top');
  const resetButton = document.querySelector('.reset');
  const status = document.querySelector('.status');
  
  // creating the rows to be accessed later
  const topRow = [topCells[0], topCells[1], topCells[2], topCells[3], topCells[4], topCells[5], topCells[6]];
  const row0 = [allCells[0], allCells[1], allCells[2], allCells[3], allCells[4], allCells[5], allCells[6]];
  const row1 = [allCells[7], allCells[8], allCells[9], allCells[10], allCells[11], allCells[12], allCells[13]];
  const row2 = [allCells[14], allCells[15], allCells[16], allCells[17], allCells[18], allCells[19], allCells[20]];
  const row3 = [allCells[21], allCells[22], allCells[23], allCells[24], allCells[25], allCells[26], allCells[27]];
  const row4 = [allCells[28], allCells[29], allCells[30], allCells[31], allCells[32], allCells[33], allCells[34]];
  const row5 = [allCells[35], allCells[36], allCells[37], allCells[38], allCells[39], allCells[40], allCells[41]];
  const rows = [row0, row1, row2, row3, row4, row5, topRow];
  
  // creating the columns to be accessed later
  const column0 = [allCells[35], allCells[28], allCells[21], allCells[14], allCells[7], allCells[0], topCells[0]];
  const column1 = [allCells[36], allCells[29], allCells[22], allCells[15], allCells[8], allCells[1], topCells[1]];
  const column2 = [allCells[37], allCells[30], allCells[23], allCells[16], allCells[9], allCells[2], topCells[2]];
  const column3 = [allCells[38], allCells[31], allCells[24], allCells[17], allCells[10], allCells[3], topCells[3]];
  const column4 = [allCells[39], allCells[32], allCells[25], allCells[18], allCells[11], allCells[4], topCells[4]];
  const column5 = [allCells[40], allCells[33], allCells[26], allCells[19], allCells[12], allCells[5], topCells[5]];
  const column6 = [allCells[41], allCells[34], allCells[27], allCells[20], allCells[13], allCells[6], topCells[6]];
  const columns = [column0, column1, column2, column3, column4, column5, column6];
  
  
  // variables
  let gameIsActive = true;
  let redIsNext = true;
  
  
  // Functions
  function cellListOfArray (cell) {
    const classList = cell.classList;
    return [...classList];
  };
  
  function cellLocation (cell) {
    const classList = cellListOfArray(cell);
    
    const rowClass = classList.find(className => className.includes('row'));
    const colClass = classList.find(className => className.includes('col'));
    const rowIndex = rowClass[4];
    const colIndex = colClass[4];
    const rowNumber = parseInt(rowIndex, 10);
    const colNumber = parseInt(colIndex, 10);

    
    return [rowNumber, colNumber];
  };


  // colors the cell that user wants to color
  function cellClick (event) {
    if (!gameIsActive){
      return;
    }
    const cell = event.target;
    const [rowIndex, colIndex] = cellLocation(cell);
    const openCell = openCellForColumn(colIndex);
      
      if (!openCell){
        return;
      }
      openCell.classList.add(redIsNext ? 'red' : 'yellow');
      checkWinStatus(openCell);
      
      redIsNext = !redIsNext;
      clearColorFromTop(colIndex);
      if (gameIsActive) {
        const topCell = topCells[colIndex];
        topCell.classList.add(redIsNext ? 'red' : 'yellow');
      }
  };
// checks if the cell is empty 
  function openCellForColumn (colIndex){
    const column = columns[colIndex];
    const columnWithoutTop = column.slice(0,6);
  
    for (const cell of columnWithoutTop) {
      const classList = cellListOfArray(cell);
      if (!classList.includes('yellow') && !classList.includes('red')) {
        return cell;
      }
    }
  
    return null;
  };
  // creates the hover with the colored chip over the columns
  function clearColorFromTop (colIndex) {
    const topCell = topCells[colIndex];
    topCell.classList.remove('yellow');
    topCell.classList.remove('red');
  };
  
  function colorOfCell (cell)  {
    const classList = cellListOfArray(cell);
    if (classList.includes('yellow')){
      return 'yellow';
    }
    if (classList.includes('red')){
      return 'red';
    }
    return null;
  };
  // creates a function for checking the wins
  function checkWinningCells (cells) {
    if (cells.length < 4){
      return false;
    }
    gameIsActive = false;
    for (const cell of cells) {
      cell.classList.add('win');
    }
    status.innerText = `${redIsNext ? `${playerOne}` : `${playerTwo}`} has won!`;
    return true;
  };
  // checks the status of the game and checking if the player has wons by cehcking all possible moves of wining.
  function checkWinStatus (cell) {
    const color = colorOfCell(cell);
    if (!color){
      return;
    } 
    const [rowIndex, colIndex] =  cellLocation(cell);
      
      // Check horizontally 
      let winningCells = [cell];
      let rowToCheck = rowIndex;
      let colToCheck = colIndex - 1;
      while (colToCheck >= 0) {
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (colorOfCell(cellToCheck) === color) {
          winningCells.push(cellToCheck);
          colToCheck--;
        } else {
          break;
        }
      }
      colToCheck = colIndex + 1;
      while (colToCheck <= 6) {
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (colorOfCell(cellToCheck) === color) {
          winningCells.push(cellToCheck);
          colToCheck++;
        } else {
          break;
        }
      }
      
      let isWinningCombo = checkWinningCells(winningCells);
      if (isWinningCombo){
        return;
      }
      
      // Check vertically winning cells
      winningCells = [cell];
      rowToCheck = rowIndex - 1;
      colToCheck = colIndex;
      while (rowToCheck >= 0) {
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (colorOfCell(cellToCheck) === color) {
          winningCells.push(cellToCheck);
          rowToCheck--;
        } else {
          break;
        }
      }

      rowToCheck = rowIndex + 1;
      while (rowToCheck <= 5) {
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (colorOfCell(cellToCheck) === color) {
          winningCells.push(cellToCheck);
          rowToCheck++;
        } else {
          break;
        }
      }
      
      isWinningCombo = checkWinningCells(winningCells);
      if (isWinningCombo){
        return;
      } 
      
      // Check diagonally / winning cells
      winningCells = [cell];
      rowToCheck = rowIndex + 1;
      colToCheck = colIndex - 1;
      while (colToCheck >= 0 && rowToCheck <= 5) {
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (colorOfCell(cellToCheck) === color) {
          winningCells.push(cellToCheck);
          rowToCheck++;
          colToCheck--;
        } else {
          break;
        }
      }
      
      rowToCheck = rowIndex - 1;
      colToCheck = colIndex + 1;
      while (colToCheck <= 6 && rowToCheck >= 0) {
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (colorOfCell(cellToCheck) === color) {
          winningCells.push(cellToCheck);
          rowToCheck--;
          colToCheck++;
        } else {
          break;
        }
      }
      
      isWinningCombo = checkWinningCells(winningCells);
      if (isWinningCombo){
        return;
      } 
      
      // Check diagonally \ winning cells
      winningCells = [cell];
      rowToCheck = rowIndex - 1;
      colToCheck = colIndex - 1;
      while (colToCheck >= 0 && rowToCheck >= 0) {
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (colorOfCell(cellToCheck) === color) {
          winningCells.push(cellToCheck);
          rowToCheck--;
          colToCheck--;
        } else {
          break;
        }
      }
      
      rowToCheck = rowIndex + 1;
      colToCheck = colIndex + 1;
      while (colToCheck <= 6 && rowToCheck <= 5) {
        const cellToCheck = rows[rowToCheck][colToCheck];
        if (colorOfCell(cellToCheck) === color) {
          winningCells.push(cellToCheck);
          rowToCheck++;
          colToCheck++;
        } else {
          break;
        }
      }
      
      isWinningCombo = checkWinningCells(winningCells);
      if (isWinningCombo){
        return;
      }

      // Check to see if we have a tie
      
      const rowsWithoutTop = rows.slice(0, 6);
      for (const row of rowsWithoutTop) {
        for (const cell of row) {
          const classList = cellListOfArray(cell);
          if (!classList.includes('yellow') && !classList.includes('red')) {
            return;
          }
        }
      }
      
      gameIsActive = false;
      status.innerText = "Game is a tie!";
    };
   
    
    // Event Handlers functions 
    function cellMouseOver (event) {
      if (!gameIsActive) {
        return;
      }
      const cell = event.target;
      const [rowIndex, colIndex] =  cellLocation(cell);
        const topCell = topCells[colIndex];
        topCell.classList.add(`${redIsNext ? `${playerOne}` : `${playerTwo}`}`);
      };
      
      function cellMouseOut (event)  {
        const cell = event.target;
        const [rowIndex, colIndex] =  cellLocation(cell);
          clearColorFromTop(colIndex);
        };
     
      
      // Adding Event Listeners
      for (const row of rows) {
        for (const cell of row) {
          cell.addEventListener('mouseover', cellMouseOver);
          cell.addEventListener('mouseout', cellMouseOut);
          cell.addEventListener('click', cellClick);
        }
      }
      resetButton.addEventListener('click', reset);
       // reset button
    function reset(){
      for (const row of rows) {
        for (const cell of row) {
          cell.classList.remove('red');
          cell.classList.remove('yellow');
          cell.classList.remove('win');
        }
      }
      gameIsActive = true;
      redIsNext = true;
      status.textContent = '';
    }
      
})