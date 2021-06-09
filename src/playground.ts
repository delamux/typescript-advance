const shout = (text: string, upperCase: boolean) =>
  (upperCase ? text.toUpperCase() : text) + "!!!!";

console.log(shout("hola", true));
