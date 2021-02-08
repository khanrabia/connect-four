let game = new Board();

// let curretPlayer = player1;


document.addEventListener("DOMContentLoaded", () => {
    // let cell = document.getElementsByClassName("cell");
    
    // document.querySeceladdEventListener("click", clickBox)
    

    document.querySelectorAll("cell").forEach(cell => {
        cell.addEventListener("click", findNextMovement)
      })
    


     
        
})



// console.log(div)