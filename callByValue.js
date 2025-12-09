const replaceX = (x) => {
    x = 10

    return x;
}

const x = 5
const a = replaceX(x)
console.log("call By value number", x)
console.log("Call by Value result", a)


const callByRef = (array1) => {
    for (let i = 0; i < array1.length; i++){
        array1[i] = array1[i] * 2
    }

    return array1;
}

const array = [1, 3, 4, 5]

const result = callByRef([...array])

console.log("Call by ref array", array)
console.log("Call by ref Result", result)


