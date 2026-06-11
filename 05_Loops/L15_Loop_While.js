/*
While Loop in Javascript is   
*/

let secret = 7;
let guess  = 0;
let tries  = 0;


while (guess !== secret) {
  guess = Math.floor(Math.random() * 10);
  tries++;
}
console.log(`Found ${secret} in ${tries} tries`);