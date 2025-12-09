function fibonacciSeries(n) {
  const array = [0, 1];
  let first = 0,
    second = 1;
  for (let i = 0; i < n-2; i++) {
    const next = first + second;
    array.push(next);

    first = array[i+1]
    second = array[i+2]
  }

  return array;
}
const result = fibonacciSeries(10);
console.log("Fibonacci array", result);
