let array = ["apple", "banana", "hello", "Mohan", "HELLO"];
let target = "hello";
let index = -1;
for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() === target.toLowerCase()) {
        index = i; 
    }
}
if (index !== -1) {
    console.log(`Target "${target}" found at index: ${index}`);
} else {
    console.log(`Target "${target}" not found`);
}