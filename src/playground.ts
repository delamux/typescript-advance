//  ************* GENERICS *************

class OperatorPlus<T> {
  operand1: T;
  operand2: T;
  operation: (o1: T, o2: T) => T;
}

const plus = new OperatorPlus<number>();

plus.operand1 = 3;
plus.operand2 = 5;

plus.operation = (a, b) => a + b;

console.log("result", plus.operation(plus.operand1, plus.operand2));
