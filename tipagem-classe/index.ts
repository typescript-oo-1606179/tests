interface IDistributor {
  name: string;
  cnpj: string;
}

class Distributor implements IDistributor {
  constructor(public name: string, public cnpj: string) {}
}

interface ISeller {
  name: string;
  phone?: string;
}

class Seller implements ISeller {
  constructor(public name: string, public phone?: string) {}
}

enum EStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

interface IProduct {
  name: string;
  price: number;
  status: EStatus;
  formatPrice(): string;
  setStatus(newStatus: EStatus): void;
  sell(newSeller: Seller): boolean;
  distributor: Distributor;
  seller?: Seller;
}

class Product implements IProduct {
  public status = EStatus.ACTIVE;
  public seller?: ISeller;

  constructor(
    public name: string,
    public price: number,
    public distributor: IDistributor
  ) {}

  public formatPrice() {
    return `R$ ${this.price}`;
  }

  public setStatus(newStatus: EStatus): void {
    console.log(`Mudando de status para ${newStatus}`);

    this.status = newStatus;
  }

  public sell(newSeller: Seller): boolean {
    if (this.status === EStatus.INACTIVE) {
      return false;
    }

    if (this.seller) {
      return false;
    }

    this.seller = newSeller;
    this.status = EStatus.INACTIVE;

    return true;
  }
}

const distributor = new Distributor("Zagonel", "12467894534654");

const product = new Product("Torneira", 100, distributor);

console.log("🚀 ~ product:", product);

console.log(product.formatPrice());

product.setStatus(EStatus.INACTIVE);

console.log("🚀 ~ product:", product);

console.log("🚀 ~ product.distributor:", product.distributor);

console.log("==========");
console.log("Produto 2");
const product2 = new Product("Chuveiro", 89, distributor);

console.log("🚀 ~ product2:", product2);

const wagner = new Seller("Wagner", "(51) 912345789");

console.log("🚀 ~ seller:", wagner);

console.log("Foi possível vender? ", product2.sell(wagner));

console.log("🚀 ~ product2:", product2);

const fogaca = new Seller("Fogaça", "(63) 78945612345");

console.log("Foi possível vender? ", product2.sell(fogaca));

console.log("🚀 ~ product2:", product2);
