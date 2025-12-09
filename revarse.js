let Str ="my name is phul babu das";
let  savedStr = Str.split(" ")
.map(function (word){
return word.split("").reverse().join("")
})
console.log(savedStr.join (""));