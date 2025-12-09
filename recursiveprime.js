function Prime(n, i = 2) {
  if (n <= 1) {
    return false;
  }
  if (i * i > n) {
    return true;
  }
    if (n % i === 0) {
    return false;
  }
  return Prime(n, i + 1);
}
console.log(Prime(2));   
console.log(Prime(7));  
console.log(Prime(9));   
console.log(Prime(29)); 