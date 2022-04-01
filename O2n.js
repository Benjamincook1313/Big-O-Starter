
//  Current index value plus the previous index value, gives you the next indexes value
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

//  O(2n) EXPONENTIAL TIME 
const fib = (n) => {
  if(n === 0) return 0
  if(n === 1) return 1
  return fib(n - 1) + fib(n - 2)
}

console.log(fib(4))