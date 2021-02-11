class Board{
    constructor(){
     
      
      this.board = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""]
      ];
      this.winner = null;
      
    } 
  isFull(){
    //return true if all spaces on the board are occupied
    //return false if any of the spaces are still ""
    return !this.board.includes("");
  }

  checkSpaceEmpty(position){
    //return true if that space is empty, otherwise return false
    return this.board[position] === "";
  }
}