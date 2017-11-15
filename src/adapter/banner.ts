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

export interface Print {
  printWeak(): void;
  printStrong(): void;
}

export class PrintBanner extends Banner implements Print {
  constructor(text: string) {
    super(text);
  }

  printWeak(): void {
    this.showWithParen();
  }

  printStrong(): void {
    this.showWithAster();
  }
}