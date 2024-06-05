const list = ["Luciel", "Wagner"];

list.map((name) => {
  console.log(name.toUpperCase());
});

const mapToUpperCase = (listToMap: Array<string>): Array<string> => {
  return listToMap.map((value) => {
    console.log(value.toUpperCase());

    return value.toUpperCase();
  });
};

mapToUpperCase(list);

console.log("Produto");
console.log("======================================");

interface IProduct {
  name: string;
  getNameToUpperCase(): string;
  setName: (newName: string) => string;
}

class Product implements IProduct {
  constructor(public name: string) {}

  public getNameToUpperCase(): string {
    return this.name.toUpperCase();
  }

  public setName(newName: string): string {
    this.name = newName;

    return newName;
  }
}

const product = new Product("teclado");

console.log(product.getNameToUpperCase());

console.log("Set name: ", product.setName("mouse"));

console.log(product.getNameToUpperCase());

console.log("Add");
console.log("======================================");

console.log("Retorno da adição 1 antes da criação : ", add(2, 2));

// Hoisting
function add(number1: number, number2: number): number {
  return number1 + number2;
}

console.log("Retorno da adição 1 depois da criação: ", add(1, 2));

// Não funciona!
// console.log("Retorno da adição 2 antes da criação: ", add2(1, 2));

let add2 = (number1: number, number2: number): number => {
  return number1 + number2;
};

console.log("Retorno da adição 2 depois da criação: ", add2(1, 2));
