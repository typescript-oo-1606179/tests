class Animal {
  constructor(
    public name: string,
    public yearsOld: number,
    private length: number
  ) {}

  public makeSound() {
    console.log("Este Animal está emitindo um som");
  }

  public showName() {
    console.log(
      `Eu sou um animal e me chamo ${this.name} e tenho ${this.yearsOld}`
    );
  }

  // Getter
  public showLength() {
    console.log(`Meu tamanho é ${this.length}cm`);
  }

  // Setter
  protected changeAnimalLength(newLength: number) {
    return (this.length = newLength);
  }
}

class Dog extends Animal {
  constructor(
    name: string,
    yearsOld: number,
    length: number,
    private raca: string
  ) {
    super(name, yearsOld, length);
  }

  public barks() {
    console.log(
      `Eu sou ${this.name}, sou da raça ${this.raca} e estou latindo`
    );
  }

  // Retorna `true` caso o novo tamanho seja válido ou retorna `false` caso o novo tamanho seja inválido
  private validateNewLength(newLength: number) {
    if (newLength < 5) return false;

    if (newLength > 100) return false;

    return true;
  }

  public changeLength(newLength: number) {
    const validLength = this.validateNewLength(newLength);

    if (!validLength) return null;

    return this.changeAnimalLength(newLength);
  }
}

console.log("Classe Animal");
console.log("=========================================");

const animal = new Animal("Teodoro", 12, 87);

console.log("🚀 ~ animal:", animal);

animal.makeSound();

animal.showName();

console.log("=========================================");
console.log("Classe Dog");
console.log("=========================================");

const dog = new Dog("Cusco", 6, 100, "Caramelo");

console.log("🚀 ~ dog:", dog);

console.log("🚀 ~ dog.name:", dog.name);

dog.makeSound();

dog.showName();

dog.barks();

dog.showLength();

dog.changeLength(70);

dog.showLength();
