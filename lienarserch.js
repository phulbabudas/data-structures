let array = [1,5,2,6,7,9]
let  value= false
for (let i = 0; i < array.length; i++) {
  if (array[i] === 100) {
    value = true
  }
}
if(value === true) {
    console.log("data true")
} else {
    console.log("Data fulse")
}
