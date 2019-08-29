export default class Book {
  private readonly name: string

  constructor(name: string) {
    this.name = name
  }

  getName() {
    return this.name
  }
}
