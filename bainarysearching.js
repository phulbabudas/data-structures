const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
const target = 40;
let start = 0
let end = array.length -1
let mid 
let found = false 
while (start<=end){
    mid =start +Math.floor((end - start)/2);
    if (array [mid]===target){
        found =true 
        break
    }
    if (array[mid]<target){
        end = mid - 1
    }else{
        start = mid+1
    }
}

if (found){
    console.log("data is found ");
}else{
    console.log("data is not found")
}