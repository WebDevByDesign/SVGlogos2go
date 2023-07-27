//Define shape class
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
  render() {}
}

module.exports = Shape;
