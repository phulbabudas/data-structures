let num =[5,10,20,40,50,60];
let findnum =50;
for(i= 0; i < num.length; i++){
    if (num[i]===findnum) {
        num[i] = num[i]*2;
    }
}
console.log(num);