interface Usuario {
  nome: string;
  sobrenome: string;
  idade: number;
}

const usuario: Usuario = {
  nome: "Nicole",
  sobrenome: "Serafim",
  idade: 8,
};

console.log(usuario.nome);
console.log(usuario.sobrenome);
console.log(usuario.idade);
