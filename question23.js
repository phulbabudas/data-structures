//Input a number and print all the factors of that number (use loops).
function printf(num) {
    console.log(`Factors of ${num} are:`);

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            console.log(i);
        }
    }
}
// function call
const number = 2000;
printf(number);