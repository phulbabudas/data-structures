let array =[2,5,8,12,40,60,36,20];
let target = 40;
let start = 3;
let end = 7;
let foundindex = -1;
    for(let i  = start; i <= end; i++) {

        if (array[i] === target){
            foundindex = i;
            break; //target mil gaya to loop stop 
       }
    } 
        if (foundindex !== -1){
       console.log('target found at index ${foundindex }');

    }else{
        console.log("target not found in the given rang");
    }