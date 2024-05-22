// string
console.log("===========================================");
console.log("string");
console.log("===========================================");
const texto: string = "Qualquer texto";

console.log(typeof texto);

// number
console.log("===========================================");
console.log("number");
console.log("===========================================");
const numero: number = 123;

console.log(typeof numero);

// boolean
console.log("===========================================");
console.log("boolean");
console.log("===========================================");
const boleano: boolean = texto === "Fulano";

console.log(typeof boleano);

console.log(texto === "Fulano");

// null
console.log("===========================================");
console.log("null");
console.log("===========================================");
const nulo: null = null;

console.log(typeof nulo);

// undefined
console.log("===========================================");
console.log("undefined");
console.log("===========================================");
const indefinido: undefined = undefined;

console.log(indefinido);

const usuario = {
  nome: "Fulano",
  idade: null,
};

console.log(usuario.idade);

if (usuario.idade) {
  console.log("O usuário possui idade");
} else {
  console.log("Você precisa inserir uma idade");
}

// Array
console.log("===========================================");
console.log("Array");
console.log("===========================================");
const lista: number[] = [1, 2, 3, 4, 5, 6, 7];

const lista2: Array<string> = ["1", "2", "3", "4"];

const lista3: ["Fabiana", boolean, number] = ["Fabiana", true, 123123];

console.log(typeof lista);

function log(prop: string) {
  console.log(prop);
}

log("test");

// Any
console.log("===========================================");
console.log("Any");
console.log("===========================================");

let qualquer: any = "Valor";
console.log(qualquer);

qualquer = false;
console.log(qualquer);

qualquer = 123;
console.log(qualquer);

qualquer = [1, 2, 3];
console.log(qualquer);

function print(param: any) {
  console.log(param);
}

print("Printando qualquer coisa");

// Objetos e interface
console.log("===========================================");
console.log("Objetos e interface");
console.log("===========================================");

interface Produto {
  nome: string;
  codigo: number;
  status: boolean;
}

const produto: Produto = {
  nome: "Mouse",
  codigo: 123,
  status: true,
};

console.log(produto);

console.log("===========================================");
console.log("Reutilização de interfaces");

interface Motor {
  nome: string;
  cavalos: number;
  potencia?: number;
}

console.log("===========================================");
console.log("Barco");

interface Barco {
  nome: string;
  possuiVela: boolean;
  motor?: Motor;
}

const barcoAMotor: Barco = {
  nome: "Titanic",
  possuiVela: false,
  motor: {
    cavalos: 153,
    nome: "iceberg",
    potencia: 340,
  },
};

console.log("🚀 ~ barcoAMotor:", barcoAMotor);

const barcoAVela: Barco = {
  nome: "Concordia",
  possuiVela: true,
};

console.log("🚀 ~ barcoAVela:", barcoAVela);

function obterNomeDoMotor(barco: Barco) {
  console.log("Prop Motor:", barco.motor);
  console.log("Possui Motor:", Boolean(barco.motor));

  if (barco.motor) {
    console.log(
      "O nome do motor do barco " + barco.nome + " é " + barco.motor.nome
    );
  } else {
    console.log("O barco " + barco.nome + " não possui motor");
  }
}

console.log("===========================================");
obterNomeDoMotor(barcoAMotor);
console.log("===========================================");
obterNomeDoMotor(barcoAVela);

interface Carro {
  marca: string;
  modelo: string;
  motor: Motor;
}

console.log("===========================================");
console.log("Carro");

const carro: Carro = {
  marca: "Fiat",
  modelo: "Uno",
  motor: {
    cavalos: 123,
    nome: "xyz",
  },
};

console.log("🚀 ~ carro:", carro);
