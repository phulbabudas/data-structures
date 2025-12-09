const array2 = [1, 2, 3, 4, 5];
const myArray = function(num) {
    const array1 = [];
    for (let i = 0; i < num.length; i++) {
        array1[i] = num[num[i]];
    }
    return array1;
};
console.log(array2);
