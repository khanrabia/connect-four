class Player{
    constructor(name, piece="red"){
        this.name = name;
        this.piece = piece;
    }

    makeMove(position, board){
       board.board[position] = this;
       document.querySelector(`#cell-${position}`).innerText = this.piece;
    }
}