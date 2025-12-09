function power (n,m){
    if (m===0) return 1
    power(n,m-1)*n
}
  console.log(power(3,2))