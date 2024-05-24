type ID = number;

interface User {
  name: string;
  id: ID;
}

const users: User[] = [
  {
    name: "Wagner",
    id: 1,
  },
  {
    name: "Fabiana",
    id: 2,
  },
  {
    name: "Luciel",
    id: 3,
  },
  {
    name: "Junior",
    id: 4,
  },
  {
    name: "Alan",
    id: 5,
  },
];

interface Product {
  name: string;
  id: ID;
  createdBy: ID;
}

const productNescau: Product = {
  name: "Nescau",
  id: 9,
  createdBy: 2,
};

function getUserByProduct(product: Product): User | undefined {
  const user = users.find((user, index) => {
    console.log(`Index ${index}`);

    console.log(user);

    return product.createdBy === user.id;
  });

  console.log("🚀 ~ user ~ user:", user);

  return user;
}

console.log(getUserByProduct(productNescau));
