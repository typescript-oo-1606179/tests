// Pegar o primeiro elemento de uma lista
// default de genérico é unknown
function getFirstElement<Element extends any = string>(
  listToGetFirsElement: Array<Element>
): Element {
  // [any, any, any, ...][0] = any
  return listToGetFirsElement[0];
}

const list: Array<string> = ["Wagner", "Luciel"];

const firstElement = getFirstElement(list);

console.log("🚀 ~ firstElement:", firstElement.toUpperCase());

const numberList: Array<number> = [5, 9];

const firstNumberElement = getFirstElement(numberList);

console.log("🚀 ~ firstNumberElement:", firstNumberElement + 2);

console.log("Arrow functions");
console.log("================================");

interface User {
  name: string;
  cpf: string;
}

const users: User[] = [
  {
    cpf: "123.456.748-78",
    name: "Luciel",
  },
  {
    cpf: "746.785.752-65",
    name: "Nicole",
  },
];

console.log("🚀 ~ users:", users);

const changeElements = <Element extends Record<string, any>>(
  listToChange: Array<Element>,
  fnToChange: (element: Element) => Element
): Array<Element> => {
  const newList = listToChange.map((element) => {
    return fnToChange(element);
  });

  return newList;
};

// Removendo "." e "-" do cpf

const usersChanged = changeElements(users, (user) => {
  const newUser = user;

  newUser.cpf = newUser.cpf.replaceAll(".", "");
  newUser.cpf = newUser.cpf.replaceAll("-", "");

  newUser.name = user.name.toUpperCase();

  return newUser;
});

console.log("🚀 ~ usersChanged:", usersChanged);

function changeValue<ReturnFn, Value extends number | string = string>(
  value: Value,
  fn: (value: Value) => ReturnFn
) {
  const returnFn = fn(value);

  return returnFn;
}

console.log(
  "🚀 ~ Retorno changeValue:",
  changeValue<number>("123", (num) => Number(num))
);
