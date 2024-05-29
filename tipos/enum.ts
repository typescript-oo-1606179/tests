enum EUserType {
  ADMIN_USER = "admin",
  SELLER = "seller",
  BACKOFFICE = "backoffice",
  MANAGER = "manager",
}

const userTypeTranslate = {
  admin: "Admnistrador",
  seller: "Vendedor",
  backoffice: "Backoffice",
  manager: "Gerente",
};

interface IUser {
  name: string;
  type: EUserType;
  canSell(): boolean;
  showName(): void;
}

class User implements IUser {
  constructor(public name: string, public type: EUserType) {}

  public showName(): void {
    console.log(`Usuário ${this.name} do tipo ${userTypeTranslate[this.type]}`);
  }

  public canSell(): boolean {
    if (this.type === EUserType.SELLER) {
      console.log(`Usuário ${this.name} pode vender`);

      return true;
    } else {
      console.log(`Usuário ${this.name} não pode vender`);

      return false;
    }
  }
}

const luciel = new User("Luciel", EUserType.ADMIN_USER);

console.log("🚀 ~ user:", luciel);

luciel.showName();

luciel.canSell();

const wagner = new User("Wagner", EUserType.SELLER);

console.log("🚀 ~ wagner:", wagner);

wagner.showName();

wagner.canSell();
