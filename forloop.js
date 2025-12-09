let i = 1
let j = 5
let sum = 0

while (i <= j) {          // condition सही
    sum = sum + i         // i को sum में जोड़ते रहो
    console.log("i =", i, "sum =", sum)
    i++                   // i को बढ़ाते रहो
}

console.log("Final Sum =", sum)