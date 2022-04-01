
// LOGARITHMIC TIME

// Ordered Array Binary Search
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

const binarySearch = (arr, start, end, target) => {
  // Base Case first
  if(start > end) return false

  let mid = Math.floor((start + end) / 2)
  if(arr[mid] === target) return true

  if(arr[mid] < target) return binarySearch(arr, mid + 1, end, target) 
  return binarySearch(arr, start, mid - 1, target)
};

console.log(binarySearch(array, 0, array.length - 1, 12))