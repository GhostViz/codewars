/*
https://www.codewars.com/kata/binary-addition

Implement a function that adds two numbers together and
returns their sum in binary. The conversion can be done before,
or after the addition.

The binary number returned should be a string.
*/

function addBinary(a,b) {
  let num = a + b;
  let binaryNum = [];
    // loop through dividing num by 2 and returning the remainder
    // at the beginning of binaryNum array. Then update num to num/2
    // rounded down
    while (num != 0) {
      binaryNum.unshift(num%2);
      num = Math.floor(num/2);
    }
  // return binarNum as a string 
  return binaryNum.join("");
}
