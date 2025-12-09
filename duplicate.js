let array =[1,2,3,3,4,6,7,8,7];
let duplicate =[];
for (let i = 0; i< array.length; i++){
    for(let j = i +1; j <array.length; j++){
if(array[i]===array[j]&& ! duplicate.includes(array[i])){
    duplicate.push(array[i]);
        }
    }
 }

console.log(duplicate)

























































































