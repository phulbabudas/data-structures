function factorial (n) {
    if (n === 0 || n === 1){
        return 1;
    }else{
        return n *factorial(n - 1);
    }
}
// function  to genrate factorial series
function factorialSeries(n){
    for (let i = 0; i <=n; i++){
        console.log('factorial ${i} = ${factorial(i)}');
    }
}
// call the function
factorialSeries(3) 