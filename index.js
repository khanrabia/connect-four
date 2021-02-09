<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
    
			


})
=======
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


>>>>>>> 1d61a1d144c124e926b229feb0c0d932c0e4a2ee
