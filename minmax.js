// let num =[10,2,40,50,4,300,5];
// let min =Math.min(...num);
// let max =Math.max(...num);
// console.log(min);
// console.log(max);

let number1 = [10, 20, 2, 5, 6, 300, 9];
let min = number1[0];
let max = number1[0];

for (let i = 1; i < number1.length; i++) {
  if (number1[i] < min) {
    min = number1[i];
  }
  if (number1[i] > max) {
    max = number1[i];
  }
}
console.log(min,max);
