class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  // classes extending Shape class to get color property
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="70" y="30" width="160" height="160" fill="${this.color}" />`;
    }
  }
  
  // export this module(file) to make it avaialble to other files using require
  module.exports = { Triangle, Circle, Square };
  
  