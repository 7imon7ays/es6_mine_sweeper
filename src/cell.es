export class Cell {
  constructor() {
    this._hidden = true;
    this._bombed = false;
  }
  isHidden() {
    return this._hidden;
  }
  isBombed() {
    return this._bombed;
  }
  setBomb() {
    this._bombed = true;
  }
  reveal() {
    this._hidden = false;
  }
  getRepr() {
    return this.isBombed() ? 'o' : '_';
  }
}
