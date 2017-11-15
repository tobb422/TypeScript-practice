class Banner {
  private text: string;

  constructor(text: string) {
    this.text = text;
  }

  showWithParen(): void {
    console.log(`(${this.text})`);
  }
  
  showWithAster(): void {
    console.log(`*${this.text}*`);
  }
}

abstract class Print {
  abstract printWeak(): void;
  abstract printStrong(): void;
}

export class PrintBanner extends Print {
  private banner: Banner

  constructor(text: string) {
    super();
    this.banner = new Banner(text);
  }

  printWeak(): void {
    this.banner.showWithParen();
  }

  printStrong(): void {
    this.banner.showWithAster();
  }
}


