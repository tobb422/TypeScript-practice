import { Builder } from './builder'

class Director {
  private builder: Builder;

  constructor(builder: Builder) {
    this.builder = builder;
  }

  build(): void {
    this.builder.makeTitle('Greeting');
    this.builder.makeString('朝から昼にかけて');
    this.builder.makeItems(['おはよう', 'こんにちは']);
    this.builder.makeString('夜に');
    this.builder.makeItems(['こんばんは', 'おやすみなさい', 'さようなら']);
    this.builder.close()
  }
}