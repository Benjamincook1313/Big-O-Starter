const data = ['A', 'B', 'C']
const data2 = [1, 2, 3, 4, 5, 6]

for(let j=0; j<data2.length; j++){
  for(let i=0; i<data.length; i++){
    console.log(data2[j] + data2[j])
  }
}


// O(n+b)
// O(n * b)
O(n^2 + n)