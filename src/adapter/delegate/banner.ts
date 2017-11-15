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
  printWeak(): void;
  printStrong(): void;
}

export class PrintBanner extends Print {
  private banner: Banner

  constructor(text: string) {
    this.banner = new Banner(text);
  }

  printWeak(): void {
    banner.showWithParen();
  }

  printStrong(): void {
    banner.showWithAster();
  }
}


