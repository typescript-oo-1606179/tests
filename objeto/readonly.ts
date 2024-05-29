interface User {
  name: string;
  phone?: string;
  readonly cpf: string;
}

const user: User = {
  name: "Lucas",
  phone: "1231233",
  cpf: "4456546547896723",
};

console.log("🚀 ~ user:", user);

// user.cpf = "qualquer coisa";

console.log("🚀 ~ user:", user.cpf);
