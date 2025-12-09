 //normal
 for ( i = 0; i <= 5; i++) {
     star = '';
    for ( j = 0; j <= i; j++) {
        star += '* ';
     }
    console.log(star);
    
 }

//revers
for (i= 4; i >= -1; i--) {
    star = '';
for (j = 0; j <= i; j++){
    star +='* ';
    
  }
  console.log(star)
}
let n = 5;
// Upper Part
for (let i = 1; i <= n; i++) {
  let row = " ".repeat(n - i) + "*".repeat(2 * i - 1);
  console.log(row);
}
// Lower Part
for (let i = n - 1; i >= 1; i--) {
  let row = " ".repeat(n - i) + "*".repeat(2 * i - 1);
  console.log(row);
}