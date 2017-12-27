import { Shape } from './lab1-19_classDef'

class Rectangle extends Shape {
  constructor (id, x, y, width, height) {
      super(id, x, y)
      this.width  = width
      this.height = height
  }
 }
 class Circle extends Shape {
  constructor (id, x, y, radius) {
      super(id, x, y)
      this.radius = radius
  }
 }

 export {
     Rectangle,
     Circle
 }
 