/* 
const shout = (text: string, upperCase: boolean) =>
  (upperCase ? text.toUpperCase() : text) + "!!!!";

console.log(shout("hola", true));
*/

//Typyng functions
const shout = (text: string, getNumExclamations: () => number): string =>
  text.toUpperCase() + "!".repeat(getNumExclamations());

const getRandom = (): number => Math.ceil(Math.random() * 10);

console.log(shout("hola", getRandom));
console.log(shout("hola", getRandom));
console.log(shout("hola", getRandom));
console.log(shout("hola", getRandom));
