/*
https://www.codewars.com/kata/vasya-clerk/javascript

The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.
*/

function tickets(peopleInLine){

  // variables for tracking bills by fraction of a hundred
  let quarter = 0;
  let half = 0;
  let whole = 0;
  
  // go through the line person by person
  for (let person in peopleInLine) {
    // take the money and sort it while giving change. 
    // if we don't have change we return "NO".
    switch(peopleInLine[person]) {
      case 25: 
        quarter += 1;
        break;
      case 50:
        if (quarter >= 1) {
          quarter -= 1;
          half += 1;
          break;
        } else {
          return "NO";
        }
      case 100: 
        if (quarter >= 1 && half >= 1) {
          quarter -= 1;
          half -= 1;
          whole += 1
          break;
        } else if (quarter >= 3) {
          quarter -= 3;
          whole += 1;
          break;
        } else {
          return "NO";
        }
    }
  }
  return "YES";
}
