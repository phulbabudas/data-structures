let array=[7,8,10,12,15,18,10] 
// let temp =3
// temp = index[1]; index[3];
// array[3]=temp;

let index1 = 1
let index2 = 3

// let a = array[index1]
// let b = array[index2]
// let temp = a

// a = b
// b = temp


// array[index1] = a
// array[index2] = b

// console.log(array)
// let array=[7,8,10,12,15,18] 
let temp = array[index1]
array[index1] = array[index2]
array[index2] = temp

console.log(array)