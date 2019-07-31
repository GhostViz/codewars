/*
https://www.codewars.com/kata/swap-values/train/javascript

Instructions:
I would like to be able to pass an array with two elements to
my swapValues function to swap the values. However it appears
that the values aren't changing.

Can you figure out what's wrong here?
*/

function swapValues(arr){
  // use push to add the 0th element
  // to the end of the array
  arr.push(arr[0]);
  // use shift to remove the 0th element
  // of the array
  arr.shift();

  // return the array with the elements swapped
  return arr;
}
