function letTest () {
  var i = 100, b = 'Hello'
  for (let i = 0; i < b.length; i++) {
   let y = b[i]
   console.log(`loop let i = ${i}`)
  }
  console.log(`var i = ${i}`)
}

export {
  letTest
}