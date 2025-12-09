function addNumbers(sum, n) {
    if(n === 0 ) return sum;

    sum = sum + n

    return addNumbers(sum, n-1)
}

const sum = addNumbers(0, 5)
console.log(sum)