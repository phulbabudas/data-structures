// const array =[2 ,3,4,6,11,15];

//  const x = array[0];
// console.log(x);// 2
// array.push(10); // 
// console.log(array);
//  array.pop();
//  console.log(array)
// const array = [2,5,7,10,12];
// let n = array.length
// let i = 0;
// let sum = 0;
// while(i<=n-1)
// {
//     let integer = array[i]
//     sum = sum + integer
//     i++
    
// }
// console.log(sum);

//small number print me
let number =[20,10,30,50,7,45];
let small = number[0];
for(let i =1; i<number.length;i++){
    if(number[i]<small){
        small =number[i]
    }
}
console.log(small);
//biggest number  print me
let numbers = [25, 3, 89, 12, 7, 45];

let biggest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > biggest) {
        biggest = numbers[i];   
    }
}

//evan number print me
console.log(biggest);

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
        console.log(num[i]);   
    }
}
//odd number print me
let arrayodd = [74, 88, 91, 22, 38, 84, 81, 17];

for (let i = 0; i < arrayodd.length; i++) {
    if (arrayodd[i] % 2 !== 0) {   
        console.log(arrayodd[i]);  
    }
}

//duplicate  number print me

let arrayd = [17, 20, 30, 40, 20, 50, 60, 30, 70, 80, 10];

let duplicate = arrayd.filter((num, index) => arrayd.indexOf(num) !== index);

console.log( [...new Set(duplicate)]);
//avrage print me
let mark =[85,97,44,37,76,60]
let sum =0;
for (let value of mark){
    sum+=value;
}
let avrage  =sum/mark.length;
console.log( `avrage mark of class=${avrage}`)