interface User {
  name: string;
}

const user: User = {
  name: "Luciel",
};

const list: Array<User> = [user];
console.log("🚀 ~ list:", list);

// const product: Record<string, boolean> = {
//   status: true,
// };
// console.log("🚀 ~ product:", product);

interface Price {
  value: number;
  discount: number;
}

interface Product<TPrice extends string | number | Price = number> {
  name: string;
  price: TPrice;
}

const product: Product<number> = {
  name: "Teclado",
  price: 587,
};

console.log("🚀 ~ product:", product);

const product2: Product<string> = {
  name: "Teclado",
  price: "367",
};

console.log("🚀 ~ product:", product2);

const produto3: Product<Price> = {
  name: "Garrafa",
  price: {
    value: 456,
    discount: 16,
  },
};

const product3: Product = {
  name: "Notebook",
  price: 3587,
};

const product4: Product = {
  name: "Celular",
  price: 1000,
};
console.log("🚀 ~ product4:", product4);

type FiveElements<TElement> = [
  TElement,
  TElement,
  TElement,
  TElement,
  TElement
];

const list2: FiveElements<number> = [1, 2, 3, 4, 5];

function toUpperCase(word: string = "fernando") {
  if (word) {
    console.log(word.toUpperCase());
  }
}

toUpperCase("luciel");
toUpperCase();
