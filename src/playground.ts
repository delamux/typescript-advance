//  ************* GENERICS *************

/* function first(list: number[]): number {
  return list[0];
}

first[("hello", "world")]; */

// To no use any we use the generics wich is resolved at the moment to call the method

function first<T>(list: T[]): T {
  return list[0];
}

const firstArrow = <T>(list: T[]): T => list[0];

// first(["hello", "world", 9]);

const result = first<string | number>(["hello", "world", 9]);
