export = factory

namespace factory {
  export abstract class Product {
    abstract use(): void;
  }

  export abstract class Factory {
    create(owner: string): Product {
      const p = this.createProduct(owner);
      this.registerProduct(p);
      return p;
    }
          
    protected abstract createProduct(owner: string): Product;
    protected abstract registerProduct(product: Product): void;
  }
}
