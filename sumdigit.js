let i = 505120998887;
let sum = 0;
while(i>0){
    let digit = i%10;
    sum = sum+digit;
    i= Math.floor( i / 10 );
}
console.log("digit ka sum =",sum);