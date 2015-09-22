import 'core-js/shim';

export class Board {
  constructor() {
    this.grid = [];
    for (var i = 0; i < 10; i++) {
      this.grid.push([]);
    }
  }
  print() {
   console.log(this.grid);
  }
}
