let array = [1,2,3,4,5,6,7,8,9];
let arr = array.map((value,index)=>{
    console.log(value,index)
    return value +1
})
console.log(arr);
