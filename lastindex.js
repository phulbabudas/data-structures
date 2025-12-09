let array = [2,3,2,5,6,3,2,5,2];
let target = 2;
let lastIndex = -1 ;
for(let i = 0; i < array.length; ++i){
    if (array[i] === target){
        lastIndex = i;
    }
}
console.log(lastIndex)