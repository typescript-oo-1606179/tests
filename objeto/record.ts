const user: Record<string, string> = {
  id: "uuid",
  name: "Luciel",
  cpf: "456789456432134",
};

console.log("🚀 ~ user:", user);

// Retorna ID de um objeto qualquer, caso não haja, retorna null
function getId(obj: Record<string, any>) {
  if (obj.id) {
    return obj.id;
  }

  return null;
}

console.log(getId(user));

interface Product {
  [key: string]: any;
  price: number;
  status: boolean;
}

const product: Product = {
  name: "Garrafa",
  manufacturer: "XYZ",
  prop1: "",
  prop2: "",
  prop3: "",
  price: 456,
  status: true,
};

function getPrice(product: Product) {
  if (product.status) {
    return product.price;
  }

  return null;
}

console.log(getPrice(product));
