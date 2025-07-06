// index.js

// Wait until the document is loaded
document.addEventListener("DOMContentLoaded", () => {
  const url = new URL(document.URL);
  const playerOne = url.searchParams.get("player-one") || "Red Player";
  const playerTwo = url.searchParams.get("player-two") || "Yellow Player";

  const headline = document.querySelector("#headline");
  const greetingOne = document.querySelector("#greetingOne");
  const greetingTwo = document.querySelector("#greetingTwo");

  headline.innerHTML = `Greetings ${playerOne} and ${playerTwo}!`;
  greetingOne.innerHTML = `${playerOne} is <span style="color:red">Red</span> (goes first)`;
  greetingTwo.innerHTML = `${playerTwo} is <span style="color:gold">Yellow</span> (goes second)`;

  const allCells = document.querySelectorAll(".cell:not(.row-top)");
  const topCells = document.querySelectorAll(".cell.row-top");
  const resetButton = document.querySelector(".reset");
  const status = document.querySelector(".status");

  const rows = [
    Array.from(allCells).slice(0, 7),
    Array.from(allCells).slice(7, 14),
    Array.from(allCells).slice(14, 21),
    Array.from(allCells).slice(21, 28),
    Array.from(allCells).slice(28, 35),
    Array.from(allCells).slice(35, 42),
    Array.from(topCells),
  ];

  const columns = Array.from({ length: 7 }, (_, col) =>
    rows.slice(0, 6).map(row => row[col]).reverse().concat(rows[6][col])
  );

  let gameIsActive = true;
  let redIsNext = true;

  function getCellPosition(cell) {
    const row = parseInt(cell.classList.value.match(/row-(\d)/)?.[1], 10);
    const col = parseInt(cell.classList.value.match(/col-(\d)/)?.[1], 10);
    return [row, col];
  }

  function openCellInColumn(col) {
    for (const cell of columns[col].slice(0, 6)) {
      if (!cell.classList.contains("red") && !cell.classList.contains("yellow")) {
        return cell;
      }
    }
    return null;
  }

  function checkDirection(cells) {
    if (cells.length >= 4) {
      gameIsActive = false;
      cells.forEach(cell => cell.classList.add("win"));
      status.innerText = `${redIsNext ? playerOne : playerTwo} wins!`;
      return true;
    }
    return false;
  }

  function colorOf(cell) {
    return cell.classList.contains("red") ? "red" : cell.classList.contains("yellow") ? "yellow" : null;
  }

  function checkWin(cell) {
    const color = colorOf(cell);
    if (!color) return;
    const [row, col] = getCellPosition(cell);

    const directions = [
      [[0, -1], [0, 1]],
      [[-1, 0], [1, 0]],
      [[-1, -1], [1, 1]],
      [[-1, 1], [1, -1]],
    ];

    for (const [[dr1, dc1], [dr2, dc2]] of directions) {
      let line = [cell];
      for (let [dr, dc] of [[dr1, dc1], [dr2, dc2]]) {
        let r = row + dr, c = col + dc;
        while (r >= 0 && r < 6 && c >= 0 && c < 7) {
          const next = rows[r][c];
          if (colorOf(next) === color) {
            line.push(next);
            r += dr; c += dc;
          } else break;
        }
      }
      if (checkDirection(line)) return;
    }

    if ([...allCells].every(c => colorOf(c))) {
      gameIsActive = false;
      status.innerText = "It's a tie!";
    }
  }

  function clearTopColors() {
    topCells.forEach(cell => cell.classList.remove("red", "yellow"));
  }

  function handleCellClick(e) {
    if (!gameIsActive) return;
    const [, col] = getCellPosition(e.target);
    const targetCell = openCellInColumn(col);
    if (!targetCell) return;

    targetCell.classList.add(redIsNext ? "red" : "yellow");
    checkWin(targetCell);

    redIsNext = !redIsNext;
    clearTopColors();
    if (gameIsActive) topCells[col].classList.add(redIsNext ? "red" : "yellow");
  }

  function handleMouseOver(e) {
    if (!gameIsActive) return;
    const [, col] = getCellPosition(e.target);
    topCells[col].classList.add(redIsNext ? "red" : "yellow");
  }

  function handleMouseOut(e) {
    const [, col] = getCellPosition(e.target);
    clearTopColors();
  }

  function reset() {
    allCells.forEach(cell => cell.classList.remove("red", "yellow", "win"));
    clearTopColors();
    gameIsActive = true;
    redIsNext = true;
    status.textContent = "";
  }

  rows.flat().forEach(cell => {
    cell.addEventListener("click", handleCellClick);
    cell.addEventListener("mouseover", handleMouseOver);
    cell.addEventListener("mouseout", handleMouseOut);
  });

  resetButton.addEventListener("click", reset);
});
