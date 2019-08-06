import * as factory from './factory'

export = idcard;

namespace idcard {
  export class IDCard extends factory.Product {
    owner: string;

    constructor(owner: string) {
      super()
      console.log(`${owner}のカードを作ります。`);
      this.owner = owner;
    }

    use(): void {
      console.log(`${this.owner}のカードを使います。`);
    }

    getOwner() {
      return this.owner;
    }
  }

  export class IDCardFactory extends factory.Factory {
    owners: Array<IDCard>;

    protected createProduct(owner: string): factory.Product {
      return new IDCard(owner);
    }

    protected registerProduct(product: factory.Product): void {
      this.owners.push(<IDCard>product);
    }

    getOwners(): Array<IDCard> {
      return this.owners
    }
  }
}