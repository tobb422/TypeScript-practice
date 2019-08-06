import { Product } from './product';

class MessageBox implements Product {
  private decochar: string

  constructor(decochar: string) {
    this.decochar = decochar;
  }

  use(s: string) {
    const length: number = s.length;
    for (let i = 0; i < length + 4; i += 1) {
      console.log(this.decochar);
    }

    console.log("");
    console.log(`${this.decochar} s ${this.decochar}`);

    for (let i = 0; i < length + 4; i += 1) {
      console.log(this.decochar);
    }

    console.log("");
  }

  createClone(): Product {
    let p: Product = null
    /*
    try {
    }
    */
    return p
  }
}