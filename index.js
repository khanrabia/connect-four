/* global Board */
/* global Player */


let board = new Board();

let playerOne = new Player("Player 1", "red");
let playerTwo = new Player("Player 2", "black");


document.addEventListener("DOMContentLoaded", () => {
    
    let cell = document.getElementsByClassName("cell");

    document.querySelectorAll("div.top").forEach(cell => {
        cell.addEventListener("click", function(e) {

        console.log(cell.style);
        cell.setAttribute("style", "background-color: red");
        });
    });
});


