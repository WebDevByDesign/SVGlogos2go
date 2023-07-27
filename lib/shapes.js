// //Define shape class
// class shape {
//     constructor(color) {
//         this.color = color;
//     }

//     render() {
// }
// }
// module.exports = shape;


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
    render() {
    }
  }
  
  module.exports = Shape;
  