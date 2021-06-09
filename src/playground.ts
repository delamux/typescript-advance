//  ************* FUNCTIONSSS *************

interface RepeatString {
  (value: string, times: number): string;
  description: string;
}
// The interface is useful because you can use more properties

//OR
// type RepeatString = (value: string, times: number) => string;

const repeatString: RepeatString = (value, times) =>
  Array(times).fill(value).join(" ");

repeatString.description = "World";

console.log("result", repeatString("Hello", 3), repeatString.description);
