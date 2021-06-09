//  ************* GENERICS *************

interface State<T> {
  value: T;
}

const stringState: State<string> = {
  value: "hello",
};

const result = stringState.value;
