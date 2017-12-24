const getASTNode = () => {
  var op = { id: 1, name: "A"}
  var lhs = 99.5, rhs = 300, pi = 3.14
  return { op, lhs, rhs, pi}
 }

 export {
   getASTNode
 }