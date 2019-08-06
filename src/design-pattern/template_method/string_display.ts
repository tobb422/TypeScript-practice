import AbstractDisplay from './abstract_display'

export default class StringDisplay extends AbstractDisplay {
  private text: string;
  
  constructor(text: string) {
    super();
    this.text = text;
  }

  open(): void {
      this.printLine();
  }

  print(): void {
    console.log(`|${this.text}|`);
  }

  close(): void {
      this.printLine();
  }

  private printLine() {
    console.log('+++')
  }
}