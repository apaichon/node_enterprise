var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]
const f1 = (x, y, ...a) => (x + y) * a.length

export default f1