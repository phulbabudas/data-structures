let array = [7, 8, 10, 12, 15, 18];
let flag = false;

for (i = 0; i < array.length; i++) {
  if (array[i] === 11) {
    flag = true
  }
}


if(flag === true) {
    console.log("data found")
} else {
    console.log("Data not found")
}