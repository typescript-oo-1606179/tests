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

interface Price<TValue extends string | number> {
  value: TValue;
  discount: number;
}

interface Product<
  TPrice extends string | number | Price<string | number> = number
> {
  name: string;
  price: TPrice;
  manufacturer?: string;
  getPrice?(): TPrice;
}

const product: Product<number> = {
  name: "Teclado",
  // manufacturer: "Logitech",
  price: 587,
  getPrice: function () {
    return 587;
  },
};

console.log("🚀 ~ product:", product);

// if (product.getPrice) {
//   console.log("🚀 ~ product.getPrice:", product.getPrice());
// }

// product.getPrice && console.log("🚀 ~ product.getPrice:", product.getPrice());

console.log("🚀 ~ product.getPrice:", product.getPrice?.());

// if (product.manufacturer) {
//   console.log("🚀 ~ product.manufacturer:", product.manufacturer.toUpperCase());
// }

// product.manufacturer &&
//   console.log("🚀 ~ product.manufacturer:", product.manufacturer.toUpperCase());

console.log("🚀 ~ product.manufacturer:", product.manufacturer?.toUpperCase());

const product2: Product<string> = {
  name: "Teclado",
  price: "367",
};

console.log("🚀 ~ product:", product2);

const produto3: Product<Price<number>> = {
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
