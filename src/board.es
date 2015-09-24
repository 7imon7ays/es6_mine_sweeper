import 'core-js/shim';
import Cell from './Cell';


const GRID_HEIGHT = 8;
const GRID_WIDTH = 8;
const NUM_BOMBS = 4;
const UP = 1;
const CENTER = 0;
const DOWN = -1;


class Board {
  constructor() {
    this._grid = [];
    for (var i = 0; i < GRID_HEIGHT; i++) {
      let row = [];
      for (var j = 0; j < GRID_WIDTH; j++) {
        row.push(new Cell(i, j));
      }
      this._grid.push(row);
    }
  }
  print() {
   for (var row of this._grid) {
     let rowRepr = row.map(cell => cell.getRepr()).join('|');
     console.log(rowRepr);
   }
  }
  layBombsAndIncrementNeighbors() {
    let eligibleCells = this._flattenedCells(),
        randomIndexLimit,
        randomIndex,
        bombedCell;

    let numBombsToPlant = NUM_BOMBS;
    while (numBombsToPlant > 0) {
      bombedCell = this._layBombAndIncrementNeighbors(eligibleCells);
      eligibleCells = eligibleCells.filter(cell => cell != bombedCell);
      numBombsToPlant--;
    }
  }
  _flattenedCells() {
    return this._grid.reduce(function (row, flattened) {
      return row.concat(flattened);
    });
  }
  _layBombAndIncrementNeighbors(eligibleCells) {
      let indexBound = eligibleCells.length;
      let bombedCellIdx = Math.floor(Math.random() * indexBound);
      let bombedCell = eligibleCells[bombedCellIdx];
      bombedCell.setBomb();
      this._incrementNeighbors(bombedCell);
      return bombedCell;
  }
  _incrementNeighbors(bombedCell) {
    let dirs = [UP, CENTER, DOWN];
    for (var rowOffset of dirs) {
      for (var colOffset of dirs) {
        let isNoOffset = rowOffset == 0 && colOffset == 0;
        if (isNoOffset) continue;

          let { rowIdx, colIdx } = bombedCell.coords(),
              nearbyRowIdx = rowIdx + rowOffset,
              nearbyColIdx = colIdx + colOffset,
              outOfBounds = (
                nearbyRowIdx <= 0 ||
                nearbyColIdx <= 0 ||
                nearbyRowIdx >= GRID_HEIGHT ||
                nearbyColIdx >= GRID_WIDTH
              )
          if (outOfBounds) continue;

          let nearbyCell = this._grid[rowIdx + rowOffset][colIdx + colOffset];
          nearbyCell.incrementNumNearbyBombs();
      }
    }
  }
}

export default Board;
