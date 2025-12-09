const array = [1, 3, 5, 3, 2]

// let sum = 0
// for(let i = 0; i<i.length; i++) {
//     sum = array[i] + sum
// }

// console.log(sum);


const getSum = (sum, array, i) => {
  if(i === array.length) {
    return sum
  }

  sum = array[i] + sum

  return getSum(sum, array, ++i)
}

const result = getSum(0, array, 0)

console.log(result)