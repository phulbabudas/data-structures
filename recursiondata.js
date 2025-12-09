function search(array, n, T) {
  if (n === 0) {
    return false;
  }
  if (array[n] === T) {
    return true;
  } else {
    return search(array, n - 1, T);
  }
}
const num = [2, 10, 16, 47];
console.log(search(num,3, 47));
