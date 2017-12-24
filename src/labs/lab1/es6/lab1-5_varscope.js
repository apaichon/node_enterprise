function varTest() {
  var x = 1
  if (true) {
    var x = 2  // same variable!
    console.log(x)  // 2
  }
  console.log(x)  // 2
 }

 export {
   varTest
 }