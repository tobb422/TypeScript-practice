import { Iterator, Aggregate } from './iterator'


export class Book {
  name: string;
              
  constructor(name: string) {
    this.name = name;
  }
              
  getName(): string {
    return this.name
  }
}
      
export class BookShelf implements Aggregate<Book> {
  private books: Book[];
  private last: number = 0;
          
  constructor(maxsize: number) {
    this.books = new Array<Book>(maxsize);
  }
          
  getBookAt(index: number): Book {
    return this.books[index];
  }
          
  appendBook(book: Book): void {
    this.books[this.last] = book;
    this.last = this.last + 1;
  }
          
  getLength(): number {
    return this.last;
  }
          
  iterator(): BookShelfIterator {
    return new BookShelfIterator(this);
  }
}
      
export class BookShelfIterator implements Iterator<Book> {
  private bookShelf: BookShelf;
  private index: number;
            
  constructor(bookShelf: BookShelf) {
    this.bookShelf = bookShelf;
    this.index = 0;
  }
        
  hasNext(): boolean {
    return this.index < this.bookShelf.getLength()
  }
        
  next(): Book {
    const book: Book = this.bookShelf.getBookAt(this.index);
    this.index = this.index + 1;
    return book
  }
}
