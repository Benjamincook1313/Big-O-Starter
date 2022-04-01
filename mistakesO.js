

// O(n)   !O(2n) || !O(n2)
const twoLoops = (a) => {
  for (let i=0; i<a; i++){
    // DO SOMETHING
  }
  for (let i=0; i<a; i++){
    // DO SOMETHING
  }
};

// O(a+b)
const twoLoops = (a, b) => {
  for (let i=0; i<a; i++){
    // DO SOMETHING
  }
  for (let i=0; i<b; i++){
    // DO SOMETHING
  }
};

//  O(a*b) !O(n2) because of two different variables the function takes in
const twoLoops = (a, b) => {
  for (let i=0; i<a; i++){
    for (let i=0; i<b; i++){
      // DO SOMETHING
    }
  }
};