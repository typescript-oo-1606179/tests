let nome: string | number = "Luciel";

console.log("🚀 ~ nome:", nome);

nome = 456;

console.log("🚀 ~ nome:", nome);

let idade = 456;

const produto = {
  nome: "Bolacha",
  id: 45,
};

console.log("🚀 ~ produto:", produto.nome);

const listaDeCompras = ["Tomate", "Feijão", "Arroz"];
console.log("🚀 ~ listaDeCompras:", listaDeCompras);

function obterPrimeiroItemDaLista(lista: Array<string>) {
  // lista =  [string, string, string, ...]
  const primeiroItem = lista[0];

  return primeiroItem;
}

console.log(obterPrimeiroItemDaLista(listaDeCompras));
