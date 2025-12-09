const arrayAddition = (array) => {
    let sum = 0;
    for(let i = 0; i<array.length; i++){
        sum += array[i]
    }

    return sum;
}

const a = [1, 54, 434, 323, 232]
const result = arrayAddition(a)
console.log(result)


const a2 = [323, 232, 2323, 2323]
const result2 = arrayAddition(a2)
console.log(result2)