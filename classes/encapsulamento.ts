class User {
  public name: string;
  public surname: string;
  public yearsOld: number;
  private cpf: string;
  protected status: boolean = true;
  public phone?: string;

  constructor(
    newName: string,
    newSurname: string,
    newYearsOld: number,
    newCpf: string
  ) {
    this.name = newName;
    this.surname = newSurname;
    this.yearsOld = newYearsOld;
    this.cpf = newCpf;
  }

  public getFullName() {
    return `${this.name} ${this.surname}`;
  }
  // Getter
  public getCpf() {
    return this.status ? this.cpf.slice(8) : null;
  }
  // Setter
  public setCpf(newCpf: string) {
    if (newCpf.length != 11) {
      return null;
    }

    return (this.cpf = newCpf);
  }

  private setStatus(newStatus: boolean) {
    this.status = newStatus;
  }

  public disable() {
    this.setStatus(false);
  }

  public enable() {
    this.setStatus(true);
  }
}

const user = new User("Luciel", "Santos", 58, "12346789123");

console.log("🚀 ~ user:", user);

console.log("🚀 ~ user.name:", user.name);

console.log("🚀 ~ getFullName:", user.getFullName());

console.log("🚀 ~ getCpf:", user.getCpf());

user.name = "Fulano";

console.log("🚀 ~ user:", user);

user.setCpf("77777777777");

console.log("🚀 ~ getCpf:", user.getCpf());

user.disable();

console.log("🚀 ~ getCpf:", user.getCpf());

const userTwo = new User("Wagner", "Worst", 63, "12345678956");

console.log("🚀 ~ userTwo:", userTwo);
