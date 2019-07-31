/*
https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
  // create total to keep count
  let total = 0;
  // loop through each element in arr
  for (let i = 0; i < arr.length; i++) {
    // if the element is larger than 0 add it to total.
    if (arr[i] > 0) {
      total += arr[i];
    }
  }
  // return the total
  return total;
}
