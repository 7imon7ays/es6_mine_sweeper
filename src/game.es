import * as board from './board';
export class Game {
  constructor() {
    this._board = new board.Board;
  }

  start() {
    this._board.layBombsAndIncrementNeighbors();
    this._board.print();
  }
}
