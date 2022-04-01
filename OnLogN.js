
// DIVIDE AND CONQUER

//  LINEARRITHMIC TIME 

const mergeSort = (arr) => {
  if(arr.length < 2) return arr

  const mid = Math.floor(arr.length  / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid, arr.length)

  return merge(mergeSort(left), mergeSort(right))
};

// ORDERED ARRAYS ONLY
const merge = (left, right) => {
  let result = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      result.push(left[leftIndex])
      leftIndex +=1
    } else{
      result.push(right[rightIndex])
      rightIndex +=1
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
};

const array = [1, 4, 9, 12, 17, 15, 25, 2, 10, 3, 7]

console.log(mergeSort(array))