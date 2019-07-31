/*
https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out,
because 9 is 81 and 1 is 1.

Note: The function accepts an integer and returns an integer

*/

function squareDigits(num){

  let newNum = [];
  // convert num to string so we can use .length
  num = num.toString()
  // loop through each character mulitiplying it
  // with itself for the the length of num.
  for (let i = 0; i < num.length; i++) {
    newNum.push(num.charAt(i) * num.charAt(i));
  }
  // return all characters in newNum combined as a single integer
  return parseInt(newNum.join(""))
}
