let  array = [3,4,3,6,3,8,3,3];
let target = 3;
let count = 0;
for (let i = 0; i < array.length; i++){
    if(array[i] === target){
        count++;
    }
}
console.log(count);
