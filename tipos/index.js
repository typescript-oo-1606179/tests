"use strict";
// string
console.log("===========================================");
console.log("string");
console.log("===========================================");
const texto = "Qualquer texto";
console.log(typeof texto);
// number
console.log("===========================================");
console.log("number");
console.log("===========================================");
const numero = 123;
console.log(typeof numero);
// boolean
console.log("===========================================");
console.log("boolean");
console.log("===========================================");
const boleano = texto === "Fulano";
console.log(typeof boleano);
console.log(texto === "Fulano");
// null
console.log("===========================================");
console.log("null");
console.log("===========================================");
const nulo = null;
console.log(typeof nulo);
// undefined
console.log("===========================================");
console.log("undefined");
console.log("===========================================");
const indefinido = undefined;
console.log(indefinido);
const usuario = {
    nome: "Fulano",
    idade: null,
};
console.log(usuario.idade);
if (usuario.idade) {
    console.log("O usuário possui idade");
}
else {
    console.log("Você precisa inserir uma idade");
}
// Array
console.log("===========================================");
console.log("Array");
console.log("===========================================");
const lista = [1, 2, 3, 4, 5, 6, 7];
const lista2 = ["1", "2", "3", "4"];
const lista3 = ["Fabiana", true, 123123];
console.log(typeof lista);
function log(prop) {
    console.log(prop);
}
log("test");
// Any
console.log("===========================================");
console.log("Any");
console.log("===========================================");
let qualquer = "Valor";
console.log(qualquer);
qualquer = false;
console.log(qualquer);
qualquer = 123;
console.log(qualquer);
qualquer = [1, 2, 3];
console.log(qualquer);
function print(param) {
    console.log(param);
}
print("Printando qualquer coisa");
// Objetos e interface
console.log("===========================================");
console.log("Objetos e interface");
console.log("===========================================");
const produto = {
    nome: "Mouse",
    codigo: 123,
    status: true,
};
console.log(produto);
console.log("===========================================");
console.log("Reutilização de interfaces");
console.log("===========================================");
console.log("Barco");
const barcoAMotor = {
    nome: "Titanic",
    possuiVela: false,
    motor: {
        cavalos: 153,
        nome: "iceberg",
        potencia: 340,
    },
};
console.log("🚀 ~ barcoAMotor:", barcoAMotor);
const barcoAVela = {
    nome: "Concordia",
    possuiVela: true,
};
console.log("🚀 ~ barcoAVela:", barcoAVela);
function obterNomeDoMotor(barco) {
    console.log("Prop Motor:", barco.motor);
    console.log("Possui Motor:", Boolean(barco.motor));
    if (barco.motor) {
        console.log("O nome do motor do barco " + barco.nome + " é " + barco.motor.nome);
    }
    else {
        console.log("O barco " + barco.nome + " não possui motor");
    }
}
console.log("===========================================");
obterNomeDoMotor(barcoAMotor);
console.log("===========================================");
obterNomeDoMotor(barcoAVela);
console.log("===========================================");
console.log("Carro");
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    motor: {
        cavalos: 123,
        nome: "xyz",
    },
};
console.log("🚀 ~ carro:", carro);
