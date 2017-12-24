import * as math from "../../../lib/math"
import { sum, pi } from "../../../lib/math"

function testModule () {
  console.log("2π = " + math.sum(math.pi, math.pi))
  console.log("2π = " + sum(pi, pi))
}

export {
  testModule
}