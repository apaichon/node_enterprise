import { Shape } from './lab1-19_classDef'

class Rectangle extends Shape {
  constructor (id, x, y, width, height) {
      super(id, x, y)
      this.width  = width
      this.height = height
  }

  static defaultRectangle () {
    return new Rectangle("default", 0, 0, 100, 100)
  }

 }

 export {
   Rectangle
 }

 