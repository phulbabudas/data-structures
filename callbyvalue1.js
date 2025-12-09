const callByRef = (array1) => {
    for (let i = 0; i < array1.length; i++){
        array1[i] = array1[i]/5
    }

    return array1;
}
const array = [10,20,30,40,50]

const result = callByRef(array)

console.log("Call by ref array", array)
console.log("Call by ref Result", result)

