import * as board from './board';
export class Game {
  constructor() {
    this.board = new board.Board;
  }

  start() {
    this.board.print();
  }
}
