
// O(n) SPACE COMPLEXITY

const countDown = (n) => {
  if(n === 0) return
  console.log(n)
  return countDown(n - 1)
};

console.log(countDown(5))