// Overload functions

function switchType(c: string): number;
function switchType(c: number): string;
function switchType(c) {
  return typeof c === "string" ? Number(c) : String(c);
}

const result1 = switchType(3);
const result2 = switchType("4");

console.log("res1", result1);
console.log("res2", result2);
