import Board from './Board';

class Game {
  constructor() {
    this._board = new Board;
  }

  start() {
    this._board.layBombsAndIncrementNeighbors();
    this._board.print();
  }
}

export default Game;
