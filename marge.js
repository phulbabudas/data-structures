let array3 =[1,2,3,4,5];
let array4 =[6,7,8,9,10];
let marge =array3.concat(array4);
console.log(marge)


let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10,12,23];

function mergeRecursive(a1, a2, index = 0) {
  if (index === a2.length) {
    return a1; 
  }
  a1.push(a2[index]);
  return mergeRecursive(a1, a2, index + 1);
}

let merged = mergeRecursive(array1, array2);

console.log(merged);
