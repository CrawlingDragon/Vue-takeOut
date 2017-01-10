class point {
  constructor(x, y) {
    return this.x + this.y;
  }
  ride() {
    return this.x * this.y;
  }
};
let x = point.ride(1,2);
console.log(x);
