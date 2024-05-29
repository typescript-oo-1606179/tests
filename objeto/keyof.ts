interface User {
  name: string | null;
  surname: string | null;
  phone: string | null;
  cpf: string | null;
  address: string | null;
}

let user: User = {
  address: "endereço",
  name: "Luciel",
  cpf: "45678",
  phone: "(51) 78984654",
  surname: "Santos",
};

console.log("🚀 ~ user:", user);

function clearUserKey(key: keyof User, userToClear: User) {
  console.log(`A chave "${key}" está sendo setada como null`);

  userToClear[key] = null;
}

clearUserKey("phone", user);
clearUserKey("address", user);

console.log(user);
