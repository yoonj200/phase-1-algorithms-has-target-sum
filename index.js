// Write your algorithm here

function hasTargetSum(array, target) {
  
  for (let i = 0; i < array.length; i++) {
  //indexOf() => return first index at which an element can be found in array, 
  //  or -1 if it is not present
    const diffIndex = array.indexOf(target - array[i]);
    if (diffIndex >= 0 && diffIndex !== i) {
      return true;
    }
  }
  return false; // no solution found
}


/* 
  Write the Big O time complexity of your function here
O(1)

O(1) = Constant (ex: Accessing a value in an object by its key)
O(log n) = Logarithmic (ex: Binary search - more on this soon)
O(n) = Linear (ex: Iterating through every element in an array)
O(n²) = Quadratic	(ex: Nested iteration)
*/

/* 
  Add your pseudocode here

  iterate through array from beginning, 1 by 1 until the end
    declare diffIndex as difference between target & index value
    //if diffIndex greater than/equal to 0 and not equal to itself
      return true
  return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
