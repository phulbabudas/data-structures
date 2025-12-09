const arr = [4, 7, 9, 16, 19, 20, 26, 30]
const target = 50

let start = 0
let end = arr.length - 1
let mid;
let found = false

while(start < end) {
    mid = Math.ceil((start+end)/2)

    if(arr[mid] === target) {
        found = true
        break;
    }

    if(arr[mid]>target) {
        end = mid-1
    }

    if(arr[mid]<target) {
        start = mid+1
    }
}

if(found == true) {
    console.log("data Found")
} else {
    console.log("Data Not found")
}