import 'core-js/shim';
import * as cell from './cell';

const GRID_HEIGHT = 8;
const GRID_WIDTH = 8;

export class Board {
  constructor() {
    this.grid = [];
    for (var i = 0; i < GRID_HEIGHT; i++) {
      let row = [];
      for (var j = 0; j < GRID_WIDTH; j++) {
        row.push(new cell.Cell);
      }
      this.grid.push(row);
    }
  }
  print() {
   for (var row of this.grid) {
     let rowRepr = row.map(cell => cell.getRepr());
     console.log(rowRepr);
   }
  }
}
