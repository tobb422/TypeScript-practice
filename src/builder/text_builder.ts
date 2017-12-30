import { Builder } from './builder';

class TextBuilder extends Builder {
  private buffer = new Array<string>();

  makeTitle(title: string): void {
    this.buffer.push('======')
    this.buffer.push(`『${title}』`)
  }

  makeString(str: string): void {
    this.buffer.push(`■${str}`)
  }

  makeItems(items: Array<string>): void {
    items.forEach((i) => this.buffer.push(`・${i}`))
  }

  close(): void {
    this.buffer.push('======')
  }

  getResult() {
    this.buffer.forEach((str) => console.log(str))
  }
}