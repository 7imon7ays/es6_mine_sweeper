export class Cell {
  constructor(rowIdx, colIdx) {
    this._hidden = true;
    this._bombed = false;
    this._numNearbyBombs = null;
    [this._rowIdx, this._colIdx] = [rowIdx, colIdx];
  }
  isHidden() {
    return this._hidden;
  }
  isBombed() {
    return this._bombed;
  }
  numNearbyBombs() {
    return this._numNearbyBombs;
  }
  setBomb() {
    this._bombed = true;
  }
  coords() {
    return {
      rowIdx: this._rowIdx,
      colIdx: this._colIdx
    };
  }
  incrementNumNearbyBombs() {
    if (this._numNearbyBombs == null) { this._numNearbyBombs = 1; }
    else { this._numNearbyBombs++; }
  }
  reveal() {
    this._hidden = false;
  }
  getRepr() {
    return this.isBombed() ? 'o' : this._numNearbyBombs || 0;
  }
}
