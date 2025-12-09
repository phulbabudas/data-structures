let numbers = [1, 2, 3, 2, 4, 1, 5];

let unique = numbers.filter(num => {
    return numbers.indexOf(num) === numbers.lastIndexOf(num);
});

console.log(unique); 